const express = require('express')
const app = express()
const port = 3333
const router = require('./routes')

//config
const db = require('./config/db')


//connect database
db.connect((err)=>{
    if(err){
        console.log('database connect error')
        return
    }
    console.log('database connected is id' + db.threadId)
})

//set view folder & template engine & public folder
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"))

// ajax config form 
app.use(express.urlencoded())
app.use(express.json())

// // [GET] /products/:id
// app.get('/products/:id', (req, res) => {

//     const id = parseInt(req.params.id)
//     let sql = `SELECT * FROM products WHERE id=${id}`

//     db.query(sql,(err,product)=>{
//         if(err){
//             res.status(500).render('404')
//             console.log('lỗi khi query data hoặc không tìm thấy sản phẩm')
//             return
//         }
//         res.render('products/detail', {product: product[0]})
//     })
// })


router(app)


app.listen(port, () => console.log('app running on ' + port))