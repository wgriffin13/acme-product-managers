import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProduct } from './store'

class SingleProduct extends Component {

    constructor () {
        super()
        this.state = {
            managerId: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.setState({managerId: this.props.product.managerId})
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
        //console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log({...this.props.product, managerId: parseInt(this.state.managerId)})
        this.props.requestUpdateManager({...this.props.product, managerId: parseInt(this.state.managerId)})
        this.props.history.push('/products')
    }

    render () {
        return (
            <li className="list-group-item">
                <div>
                    <h6>{this.props.product.name}</h6>
                    <div className="form-group">
                        <label>
                            <em>Product Manager</em>
                        </label>
                        <select name="managerId" className="form-control" onChange={this.handleChange}>
                            <option value="">--- none ---</option>
                            {this.props.users.map(user => {
                                return (
                                    (user.id === this.props.product.managerId) ? <option key={user.id} value={user.id} selected>{user.name}</option> : <option key={user.id} value={user.id} >{user.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                </div>
            </li>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        requestUpdateManager: (product) => dispatch(updateProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(SingleProduct)
