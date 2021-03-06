
const lengthCart = document.getElementById("length-cart");
const _cart = JSON.parse(localStorage.getItem("cart"));


lengthCart.innerHTML = _cart ? _cart.length : 0;

const listCart = document.getElementById("list-cart");

const renderCart = () => {
  const sum_price = document.getElementById("sum_price");

  const _cart = JSON.parse(localStorage.getItem("cart"));
  const html = _cart
    .map((cart, index) => {
      return `
			<tr>
				<td class="delete">
						<div  class="product-delete"><i class="far fa-trash-alt"></i></div>
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
						<p class="cart-price" id="price-${index}">
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
				<p class="cart-price">${Number(cart.price * cart.count).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      })}</p>				</td>
		</tr>
		`;
    })
    .join(" ");

  // const sumPrice = _cart?.reduce((total, number) => {
  //   return Number(total) + Number(number.price);
  // }, 0);

  // sum_price.innerHTML = Number(sumPrice).toLocaleString("vi", {
  //   style: "currency",
  //   currency: "VND",
  // });

  // listCart.innerHTML = html;
};

// renderCart();

// const myInput = document.querySelector('input[name="count"]');

// myInput.addEventListener("change", (e) => {
//   const html = _cart
//     .map((cart) => {
//       return `
// 			<tr>
// 				<td class="delete">
// 						<a class="product-delete" href="#"><i class="far fa-trash-alt"></i></a>
// 				</td>
// 				<td class="product">
// 						<div class="cart-product">
// 								<div class="product-image">
// 										<img src="../admin/assets/img/product/${cart.image}" alt="">
// 								</div>
// 								<div class="product-content">
// 										<h5 class="title"><a href="product-simple-01.html">${cart.name}</a></h5>
// 								</div>
// 						</div>
// 				</td>
// 				<td class="price">
// 						<p class="cart-price">
// 						${Number(cart.price).toLocaleString("vi", {
//         style: "currency",
//         currency: "VND",
//       })}
// 						</p>
// 				</td>
// 				<td class="quantity">
// 						<div class="product-quantity d-inline-flex">
// 								<button type="button" class="sub"><i class="fal fa-minus"></i></button>
// 								<input name="count" type="text" value="${e.target.value}" />
// 								<button type="button" class="add"><i class="fal fa-plus"></i></button>
// 						</div>
// 				</td>
// 				<td class="Total">
// 						<p class="cart-price">${Number(cart.price * e.target.value).toLocaleString(
//         "vi",
//         {
//           style: "currency",
//           currency: "VND",
//         }
//       )}</p>
// 				</td>
// 		</tr>
// 		`;
//     })
//     .join(" ");
//   listCart.innerHTML = html;
// });

// const del_cart = document.getElementById("del_cart");

// del_cart.addEventListener("click", () => {
//   localStorage.removeItem("cart");
//   window.location.reload();
// });

// const update_cart = document.getElementById("update_cart");

// update_cart.addEventListener("click", () => {
//   console.log("clicked");
// });

// const confirm_order = document.querySelector(".confirm_order");

// confirm_order.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const {
//     customer_name,
//     customer_address,
//     customer_email,
//     note,
//     customer_phone_number,
//   } = confirm_order;

//   requestApi("http://localhost:3000/orders", "POST", {
//     id: Math.random(),
//     customer_name: customer_name.value,
//     customer_address: customer_address.value,
//     customer_email: customer_email.value,
//     note: note.value,
//     customer_phone_number: customer_phone_number.value,
//     created_date: new Date().toISOString().slice(0, 10),
//     satus: false,
//   });

//   window.open('../../admin/order.html');
// });
