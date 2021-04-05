class AdminController{
    index(req, res, next){
        res.render('admin')
    }
    add(req, res, next){
        res.render('admin/add')
    }
    user(req, res, next){
        res.render('admin')
    }
    cate(req, res, next){
        res.render('admin')
    }
}

module.exports = new AdminController