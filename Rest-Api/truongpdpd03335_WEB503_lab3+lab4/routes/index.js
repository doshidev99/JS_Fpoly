const homeRouter = require('./home')
const productRouter = require('./product')
const cateRouter = require('./categories')
const adminRouter = require('./admin')

const router = (app) => {

    //[GET] /products
    app.use('/products', productRouter)

    //[GET] /admin
    app.use('/admin', adminRouter)

    //[GET] /cate
    app.use('/cate', cateRouter)

    //[GET] home
    app.use('/', homeRouter)
    
}

module.exports = router