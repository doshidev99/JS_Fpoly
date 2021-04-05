const db = require('../config/db')

class cateController{
    index(req, res){
        res.render('cate')
    }

    cate(req, res, next){
        let idCate = req.params.cate
        let sql = `SELECT * FROM products WHERE idCate=${idCate}`

        db.query(sql, (err, data)=>{
            if(err){
                res.status(500).render('404')
                return
            }
            res.render('cate/detail', {data})
        })
    }
}

module.exports = new cateController