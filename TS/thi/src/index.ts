
interface ProductInterFace {
  productId: number;
  name: string;
  price: number;
}

class Product implements ProductInterFace {
  productId: number;
  name: string;
  price: number;

  constructor(productId: number, name: string, price: number) {
    this.productId = productId;
    this.name = name;
    this.price = price;
  }
}

const rootEl: HTMLElement | null = document.querySelector('#product') as HTMLElement;

const _listProduct: Product[] = [];

const pr1 = new Product(1, 'TV', 274000000);
const pr2 = new Product(2, 'Dell', 4000000);
const pr3 = new Product(3, 'Macos', 200000);
const pr4 = new Product(4, 'Asus', 432000);
const pr5 = new Product(5, 'Smartphone', 340000);
const pr6 = new Product(6, 'AC', 1220000);

const formatPrd = [
  pr1, pr2, pr3, pr4, pr5, pr6
]

formatPrd.map(p => {
  _listProduct.push(p)
})


const html: string = _listProduct.map(el => {
  return `
  <div class="card mt-2" style="width: 18rem;">
    <div class="card-body">
      Mã Sản phẩm
      <h5 class="card-title">${el.productId}</h5>
      Tên sản phẩm
      <h5 class="card-title">${el.name}</h5>
      Giá sản phẩm
      <h5 class="card-title">${el.price}</h5>  
    </div>
  </div>
  `
}).join('');

rootEl.innerHTML = html;