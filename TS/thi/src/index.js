var Product = /** @class */ (function () {
    function Product(productId, name, price) {
        this.productId = productId;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var rootEl = document.querySelector('#product');
var _listProduct = [];
var pr1 = new Product(1, 'TV', 274000000);
var pr2 = new Product(2, 'Dell', 4000000);
var pr3 = new Product(3, 'Macos', 200000);
var pr4 = new Product(4, 'Asus', 432000);
var pr5 = new Product(5, 'Smartphone', 340000);
var pr6 = new Product(6, 'AC', 1220000);
var formatPrd = [
    pr1, pr2, pr3, pr4, pr5, pr6
];
formatPrd.map(function (p) {
    _listProduct.push(p);
});
var html = _listProduct.map(function (el) {
    return "\n  <div class=\"card mt-2\" style=\"width: 18rem;\">\n    <div class=\"card-body\">\n      M\u00E3 S\u1EA3n ph\u1EA9m\n      <h5 class=\"card-title\">" + el.productId + "</h5>\n      T\u00EAn s\u1EA3n ph\u1EA9m\n      <h5 class=\"card-title\">" + el.name + "</h5>\n      Gi\u00E1 s\u1EA3n ph\u1EA9m\n      <h5 class=\"card-title\">" + el.price + "</h5>  \n    </div>\n  </div>\n  ";
}).join('');
rootEl.innerHTML = html;
