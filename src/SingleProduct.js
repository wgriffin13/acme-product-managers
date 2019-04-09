import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleProduct extends Component {

    render () {
        return (
            <li className="list-group-item">
                <div>
                    <h6>{this.props.product.name}</h6>
                    <div className="form-group">
                        <label>
                            <em>Product Manager</em>
                        </label>
                        <select name="managerId" className="form-control">
                            <option>--- none ---</option>
                            {this.props.users.map(user => {
                                return (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Save</button>
                </div>
            </li>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        requestUpdateManager: () => dispatch()
    }
}

export default connect(null, mapDispatchToProps)(SingleProduct)
