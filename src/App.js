import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import { connect } from 'react-redux'
import { getUsers, getProducts } from './store'
import Managers from './Managers'
import Products from './Products'

class App extends Component {

    constructor () {
        super()
        this.managerCount = this.managerCount.bind(this)
        this.getMangers = this.getMangers.bind(this)
    }

    managerCount (products) {
        const managers = products.reduce((acc, product) => {
            if (product.managerId) {
                acc[product.managerId] = product.managerId
            }
            return acc
        }, {})
        const managerKeys = Object.keys(managers)
        return managerKeys.length
    }

    getMangers (products, users) {
        const managers = users.reduce((acc, user) => {
            for (let i = 0; i < products.length; i++) {
                if (user.id === products[i].managerId) {
                    acc.push(user)
                    break
                }
            }
            return acc
        }, [])
        return managers
    }

    componentDidMount () {
        this.props.requestGetUsers()
        this.props.requestGetProducts()
    }

    render () {
        return (
            <div className="container ">
                <h1>Acme Product Managers</h1>
                <Nav mCount={this.managerCount(this.props.products)} />
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/managers" render={() => <Managers managers={this.getMangers(this.props.products, this.props.users)} />} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestGetUsers: () => dispatch(getUsers()),
        requestGetProducts: () => dispatch(getProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
