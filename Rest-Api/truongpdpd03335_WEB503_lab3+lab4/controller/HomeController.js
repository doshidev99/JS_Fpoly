class HomeController {
    //[GET] /home
    home(req, res, next) {
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
    }
  }
  
  module.exports = new HomeController()
  