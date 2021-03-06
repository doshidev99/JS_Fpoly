const lengthCart = document.getElementById("length-cart");
const _cart = JSON.parse(localStorage.getItem("cart"));

lengthCart.innerHTML = _cart ? _cart.length : 0;

const renderCart = () => {
  const listCart = document.getElementById("list-cart");
  const _cart = JSON.parse(localStorage.getItem("cart"));

  if (listCart) {
    const html = _cart
      .map((cart) => {
        return `
			<li>
				<div class="cart-product d-flex">
					<div class="cart-product-image">
						<a href="product-simple-01.html"><img src="../assets/images/cart/${cart.image}" alt="product"></a>
					</div>
					<div class="cart-product-content media-body">
						<h6 class="title"><a href="product-simple-01.html">Biker Jacket</a></h6>
						<span class="price">1x <span>${cart.name}</span></span>
					</div>
					<a href="#" class="product-cancel"><i class="fal fa-times"></i></a>
				</div>
			</li>
		`;
      })
      .join(" ");

    listCart.innerHTML = html;
  }
};

renderCart();
