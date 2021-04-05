const express = require('express')
const app = express()
const port = 3333

var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/image')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
var upload = multer({ storage: storage })


const products = [
    { id: 1, name: 'React JS', price: 60000, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro dolorem ad quo placeat, consequuntur dolor laudantium laboriosam facere debitis dicta tempore temporibus harum impedit dignissimos nulla quas nostrum obcaecati.', image: 'react.jpg' },
    { id: 2, name: 'Node JS', price: 45000, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro dolorem ad quo placeat, consequuntur dolor laudantium laboriosam facere debitis dicta tempore temporibus harum impedit dignissimos nulla quas nostrum obcaecati.', image: 'node.jpg' },
    { id: 3, name: 'Solidity', price: 300, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro dolorem ad quo placeat, consequuntur dolor laudantium laboriosam facere debitis dicta tempore temporibus harum impedit dignissimos nulla quas nostrum obcaecati.', image: 'solidity.jpg' },
]

app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.urlencoded())
app.use(express.json())
app.use(express.static("public"))


// [GET] /products/add
app.get('/products/add', (req, res) => {
    res.render('products/add')
})

// [GET] /products/add:id
app.get('/products/:id', (req, res) => {

    const id = parseInt(req.params.id)
    const product = products.find((item) => {
        return item.id === id
    })

    if(product){
        res.render('products/detail', {product})
    }else{
        res.render('404')
    }

    //res.render('products/detail', {product})
})

// [POST] /products/add
app.post('/products/add', upload.single('image'), (req, res, next) => {

    const file = req.file
    if(!file){
        const error = new Error('please upload file')
        return next(error)
    }

    let title = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    //Thêm vào mảng json 1 cuối sách mới
    products.push({
        id: 0110,
        name: title,
        price: price,
        description: description,
        image: file.filename,
    })
    res.redirect('/products')
})

// [GET] /products
app.get('/products', (req, res) => {
    res.render('products/index', { products: products })
})



//[GET] /
app.get('/', (req, res) => {
    let toDay = new Date()
    let myDay = toDay.getDay()
    let day = ''
    switch (myDay) {
        case 0:
            day = "Chủ Nhật"
            break
        case 1:
            day = "Thứ Hai"
            break
        case 2:
            day = "Thứ Ba"
            break
        case 3:
            day = "Thứ Tư"
            break
        case 4:
            day = "Thứ Năm"
            break
        case 5:
            day = "Thứ Sáu"
            break
        case 6:
            day = "Thứ Bảy"
            break
    }
    res.render('home', { day: day })
})


app.listen(port, () => console.log('app running on ' + port))