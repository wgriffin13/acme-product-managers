const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme-product-managersDB', {
    logging: false
})

const seed = {
    products: [
        {name: 'bar', managerId: 1},
        {name: 'bazz', managerId: 1},
        {name: 'foo', managerId: 3}
    ],
    users: [
        {name: 'moe'},
        {name: 'larry'},
        {name: 'curly'}
    ]
}

const Product = conn.define('product', {
    name: Sequelize.STRING
})

const User = conn.define('user', {
    name: Sequelize.STRING
})

Product.belongsTo(User, {as: 'manager'})

const syncAndSeed = () => {
    return conn.sync({ force: true })
        .then(() => {
            return Promise.all([
                Promise.all(
                    seed.users.map(user => User.create(user))
                ),
                Promise.all(
                    seed.products.map(product => Product.create(product))
                )
            ])
        })
}

module.exports = {syncAndSeed}
