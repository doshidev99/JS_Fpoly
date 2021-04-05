const express = require('express')
const app = express()

const server = require('http').Server(app)

// use middle... bodyParas
app.use(express.urlencoded());
app.use(express.json());

const inventors = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
];

// [GET] inventors/:id
app.get('/inventors/:id', (req, res, next) => {
    let id = req.params.id
    user = inventors.find(i => i.id == id)
    if (user) {
        res.status(200).send(`<h2>Thông tin chi tiết nhà khoa học:Full name: ${user.first} ${user.last}, Year: ${user.year}, 
        Passed: ${user.passed}</h2>`)
    } else {
        res.status(500).send('no user')
    }
})

// [GET] inventors
app.get('/inventor', (req, res, next) => {
    let html = inventors.map(i => {
        return `<li><a style="text-decoration:none;color:green;" href="/inventor/${i.id}">${i.last}</a></li>`
    }).join('')
    res.send(`<ul>${html}</ul>`)
})

//[POST] /inventor
app.post('/inventor',(req, res)=>{
    let user = req.body
    inventors.push(user)
    res.redirect('/inventor')
})

//[GET] /add-product
app.get('/add-product', (req, res, next) => {
    res.send(`<h1>Thêm Nhà Khoa Học</h1><form action="/inventor" method="POST"><input type="text" 
name="first" placeholder="input first name"><input type="text" name="last" placeholder="input last name"><br><input 
type="number" name="year" placeholder="Year"><input type="number" name="passed" 
placeholder="passed"><br><button type="submit">Add Product</button></form>`)
})

//[GET] /product
app.get('/product', (req, res) => {
    res.send('day la trang san pham')
})

//[GET] /
app.get('/', (req, res) => {
    res.send('day la trang chu')
})

server.listen(3000, () => console.log('server running on port 3000'))