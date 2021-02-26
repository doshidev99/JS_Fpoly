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

const lengthCart = document.getElementById("length-cart");
const _cart = JSON.parse(localStorage.getItem("cart"));

lengthCart.innerHTML = _cart ? _cart.length : 0;

const listCart = document.getElementById("list-cart");

const renderCart = () => {
  const _cart = JSON.parse(localStorage.getItem("cart"));
  const html = _cart
    .map((cart) => {
      return `
			<tr>
				<td class="delete">
						<a class="product-delete" href="#"><i class="far fa-trash-alt"></i></a>
				</td>
				<td class="product">
						<div class="cart-product">
								<div class="product-image">
										<img src="../admin/assets/img/product/${cart.image}" alt="">
								</div>
								<div class="product-content">
										<h5 class="title"><a href="product-simple-01.html">${cart.name}</a></h5>
								</div>
						</div>
				</td>
				<td class="price">
						<p class="cart-price">
						${Number(cart.price).toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
						</p>
				</td>
				<td class="quantity">
						<div class="product-quantity d-inline-flex">
								<button type="button" class="sub"><i class="fal fa-minus"></i></button>
								<input name="count" type="text" value="${cart.count}" />
								<button type="button" class="add"><i class="fal fa-plus"></i></button>
						</div>
				</td>
				<td class="Total">
				<p class="cart-price">${Number(cart.price * 4).toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })}</p>				</td>
		</tr>
		`;
    })
    .join(" ");

  listCart.innerHTML = html;
};

renderCart();

const myInput = document.querySelector('input[name="count"]');

myInput.addEventListener("change", (e) => {
  // eslint-disable-next-line no-console
  console.log(e.target.value, "e.target.value");
  const html = _cart
    .map((cart) => {
      return `
			<tr>
				<td class="delete">
						<a class="product-delete" href="#"><i class="far fa-trash-alt"></i></a>
				</td>
				<td class="product">
						<div class="cart-product">
								<div class="product-image">
										<img src="../admin/assets/img/product/${cart.image}" alt="">
								</div>
								<div class="product-content">
										<h5 class="title"><a href="product-simple-01.html">${cart.name}</a></h5>
								</div>
						</div>
				</td>
				<td class="price">
						<p class="cart-price">
						${Number(cart.price).toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
						</p>
				</td>
				<td class="quantity">
						<div class="product-quantity d-inline-flex">
								<button type="button" class="sub"><i class="fal fa-minus"></i></button>
								<input name="count" type="text" value="${e.target.value}" />
								<button type="button" class="add"><i class="fal fa-plus"></i></button>
						</div>
				</td>
				<td class="Total">
						<p class="cart-price">${Number(cart.price * e.target.value).toLocaleString(
              "vi",
              {
                style: "currency",
                currency: "VND",
              }
            )}</p>
				</td>
		</tr>
		`;
    })
    .join(" ");
  listCart.innerHTML = html;
});
