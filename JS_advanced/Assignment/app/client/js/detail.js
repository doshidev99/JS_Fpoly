const urlProduct = "http://localhost:3000/products";
const requestApi = (url, method = "GET", data) => {
  const response = fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(data),
  });
  return response;
};

const listProduct = document.getElementById("product_detail");

const params = new URL(window.location.href).searchParams;

const id_url = params.get("id");

requestApi(`http://localhost:3000/products?id=${id_url}`)
  .then((response) => response.json()) // convert to json
  .then(async (result) => {
    const html = result
      .map((el, index) => {
        return `

				<div class="col-lg-6">
				<div class="product-simple-image flex-wrap mt-50">
					<div class="product-simple-preview-image">
						<img class="product-zoom" src="../admin/assets/img/product/${el.image}" alt="">
					</div>
					<div id="gallery_01" class="product-simple-thumb-image">
						<div class="single-product-thumb">
							<a class="active" href="#" data-image="assets/images/product/product-37.jpg">
								<img src="../admin/assets/img/product/${el.image}" alt="">
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="product-simple-details mt-50">
					<h4 class="title">${el.name}</h4>
					<p class="sku-id">
					${el.status ? "Còn hàng! " : "Hết hàng!"}
						
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
						<span class="price">${Number(el.price).toLocaleString("vi", {
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
      })
      .join(" ");
    listProduct.innerHTML = html;

    const myInput = document.querySelector('input[name="count"]');

    var count = 1;
    myInput.addEventListener("change", (e) => {
      count = e.target.value;
    });

    const addToCard = document.querySelector(".add-cart");

    if (addToCard) {
      addToCard.addEventListener("submit", (e) => {
        e.preventDefault();

        const {
          name,
          price,
          detail,
          image,
          discount,
          status,
          category,
        } = result[0];

        const newData = {
          id: id_url,
          name,
          price,
          detail,
          image,
          discount,
          status,
          category,
          count,
        };

        const _cart = JSON.parse(localStorage.getItem("cart"));

        const flag =
          _cart &&
          Object.keys(_cart?.find((el) => el.id === id_url)).length > 0;

        if (flag) {
          alert("sản phẩm đà tồn tại");
        } else {
          if (_cart) {
            const _data = [..._cart, newData];
            localStorage.setItem("cart", JSON.stringify(_data));
          } else {
            localStorage.setItem("cart", JSON.stringify([newData]));
          }
        }
      });
    }
  })
  .catch((err) => console.log("Request Failed", err));

console.log("loading detail js of detail.html", "<----");
