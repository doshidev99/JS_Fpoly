const db = require('../config/db')
const { productModel } = require('../model/Products')
class ProductController {
    add(req, res) {
        res.render('products/add')
    }

    index(req, res, next) {
        try {
            db.query(`SELECT * FROM products`, ((err, data) => {
                res.render('products/index', { products: data })
            }))
        } catch (error) {
            res.status(500).send('Cannot connect to database !')
        }
    }


    addPost(req, res, next) {
        const file = req.file
        if (!file) {
            const error = new Error('please upload file')
            return next(error)
        }

        const product = productModel({
            name: req.body.name,
            cateId: req.body.cate,
            price: req.body.price,
            description: req.body.description,
            image: file.filename
        })

        console.log(product)

        if (product == null) {
            console.log('Không có dữ liệu đẩy lên sv')
            res.status(500).render("404")
            return
        }

        let sql = `INSERT INTO products (id, name, price, description, image, idCate) VALUES (NULL, '${product.name}', '${product.price}', '${product.description}', '${product.image}', '${product.cateId}')`

        db.query(sql, (err, data) => {
            if (err) {
                console.log('err insert data')
                return
            }
            res.redirect('/products')
        })
    }

    detailProduct(req, res, next) {
        const id = parseInt(req.params.id)

        let sql = `SELECT * FROM products WHERE id=${id}`

        db.query(sql, (err, product) => {
            if (err) {
                res.status(500).render('404')
                console.log('lỗi khi query data hoặc không tìm thấy sản phẩm')
                return
            }
            res.render('products/detail', { product: product[0] })
        })
    }

}

module.exports = new ProductController