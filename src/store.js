/* eslint-disable default-case */
import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const initialState = {
    users: [],
    products: []
}

const GOT_USERS = 'GOT_USERS'
const GOT_PRODUCTS = 'GOT_PRODUCTS'

const gotUsers = (users) => (
    {
        type: GOT_USERS,
        users
    }
)

const gotProducts = (products) => (
    {
        type: GOT_PRODUCTS,
        products
    }
)

export const getUsers = () => {
    return (dispatch) => {
        axios.get('/api/users')
            .then(response => response.data)
            .then(data => {
                dispatch(gotUsers(data))
            })
    }
}

export const getProducts = () => {
    return (dispatch) => {
        axios.get('/api/products')
            .then(response => response.data)
            .then(data => {
                dispatch(gotProducts(data))
            })
    }
}

export const updateProduct = (product) => {
    return (dispatch) => {
        axios.put('/api/products/' + product.id, product)
            .then(() => {
                dispatch(getUsers())
                dispatch(getProducts())
            })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_USERS:
            return {...state, users: action.users}
        case GOT_PRODUCTS:
            return {...state, products: action.products}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store
