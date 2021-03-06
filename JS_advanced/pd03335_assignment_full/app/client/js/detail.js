const productDetail = document.getElementById("product_detail");

const _cart = JSON.parse(localStorage.getItem("cart"));

const lengthCart = document.getElementById("length-cart");

lengthCart.innerHTML = _cart ? _cart.length : 0;


const params = new URL(window.location.href).searchParams;

const id_url = params.get("id");

db.collection(`products`).get().then(querySnapShot => {
  querySnapShot.forEach(subDoc => {
    const { id } = subDoc.data()
    if (id === (+id_url)) {
      renderDetailProduct(subDoc);
    }
  })
})


const renderDetailProduct = (product) => {

  const { name, price, image, detail, discount, status, id, category } = product.data();

  const html = `
      <div class="col-lg-6">
          <div class="product-simple-image flex-wrap mt-50">
            <div class="product-simple-preview-image">
              <img class="product-zoom" src="../admin/assets/img/product/${image}" alt="">
            </div>
            <div id="gallery_01" class="product-simple-thumb-image">
              <div class="single-product-thumb">
                <a class="active" href="#" data-image="assets/images/product/product-37.jpg">
                  <img src="../admin/assets/img/product/${image}" alt="">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product-simple-details mt-50">
            <h4 class="title">${name}</h4>
            <p class="sku-id">
            ${status ? "Còn hàng! " : "Hết hàng!"}
              
              </span></p>

            <p class="review">
              <i class="fas fa-star review-on"></i>
              <i class="fas fa-star review-on"></i>
              <i class="fas fa-star review-on"></i>
              <i class="fas fa-star review-on"></i>
              <i class="fas fa-star review-on"></i>
              <a href="#">(3 customer reviews)</a>
            </p>

            <div class="product-price">
              <span class="price">${Number(price).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })} </span>
            </div>
            <div class="product-quantity-cart-wishlist-compare flex-wrap">
              <form
                class="add-cart"
                      method="POST"
                      enctype="multipart/form-data"
              >
                <div class="product-quantity d-flex">
                  <button type="button" class="sub"><i class="fal fa-minus"></i></button>
                  <input type="text" value="1" name="count" />
                  <button type="button" class="add"><i class="fal fa-plus"></i></button>
                </div>
                <div class="product-cart">
                  <button type="submit" class="main-btn">Thêm vào giỏ hàng</button>
                </div>
              </form>
              <a href="#" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" class="product-wishlist"><i class="far fa-heart"></i></a>
              <a href="#" data-tooltip="tooltip" data-placement="top" title="Add to Compare" class="product-compare"><i class="far fa-repeat-alt"></i></a>
            </div>

            <div class="product-description">
              <p>
              </p>

              <ul class="description-list">
                <li>Cotton-blend fabric</li>
                <li>Check-pattern</li>
                <li>Removable belt at the waist</li>
                <li>High waist</li>
              </ul>
            </div>

            <div class="product-meta">
              <p>Categories: <a href="#">Metro,</a> <a href="#">Women</a></p>
              <p>Tags: <a href="#">Dress,</a> <a href="#">Fashion</a> <a href="#">Furniture,</a> <a href="#">Lookbook</a></p>
            </div>

            <div class="product-share">
              <ul class="social">
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
    `;

  productDetail.insertAdjacentHTML('beforeend', html)


  const myInput = document.querySelector('input[name="count"]');

  var count = 1;
  myInput.addEventListener("change", (e) => {
    count = e.target.value;
  });

  const addToCard = document.querySelector(".add-cart");

  if (addToCard) {
    addToCard.addEventListener("submit", (e) => {
      e.preventDefault();

      const newData = {
        name, price, image, detail, discount, status, id: (+id), category, count
      };

      const _cart = JSON.parse(localStorage.getItem("cart"));

      const flag =
        _cart &&
          Object.keys(_cart?.find((el) => el.id === id_url) || [])?.length > 0
          ? true
          : false;

      if (flag) {
        alert("sản phẩm đà tồn tại");
      } else {
        if (_cart) {
          const _data = [..._cart, newData];
          localStorage.setItem("cart", JSON.stringify(_data));
          window.location.reload();
        } else {
          localStorage.setItem("cart", JSON.stringify([newData]));
          window.location.reload();
        }
      }
    });
  }
}