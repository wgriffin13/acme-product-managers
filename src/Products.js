import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';

class Products extends Component {

    render () {
        return (
            <ul className="list-group">
                {this.props.products.map(product => {
                    return (
                        <SingleProduct key={product.id} product={product} users={this.props.users} />
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        products: state.products
    }
}

export default connect(mapStateToProps)(Products)
