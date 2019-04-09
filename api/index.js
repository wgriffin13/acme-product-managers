const router = require('express').Router()
const { Product, User } = require('../db/index')

router.put('/products/:id', (req, res, next) => {
    Product.update(req.body, {
        where: {
            id: req.params.id
        },
        returning: true,
        plain: true
    })
    .then(([response, data]) => res.json(data.id))
    .catch(next)
})

router.get('/products', (req, res, next) => {
    Product.findAll()
        .then(data => res.send(data))
        .catch(next)
})

router.get('/users', (req, res, next) => {
    User.findAll()
        .then(data => res.send(data))
        .catch(next)
})

module.exports = router
