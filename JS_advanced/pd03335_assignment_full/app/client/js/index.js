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

const listProduct = document.getElementById("list_product");


db.collection('products').get().then(querySnapShot => {
	querySnapShot.forEach(el => {
		renderProduct(el)
	})
})


const renderProduct = (product) => {
	const { name, price, image, detail, discount, status, id } = product.data()

	const html = `
	<div class="col-lg-3 col-md-4 col-sm-6 cursor-pointer">

	<div class="single-product mt-50">
		<div class="product-image">
			<div class="image">
				<img class="product-1" src="../admin/assets/img/product/${image
		}" alt="product">
			</div>

			<ul class="product-meta text-center">
				<li><a data-tooltip="tooltip" data-placement="top" title="Add to Cart" href="#"><i class="fal fa-Shopping-cart"></i></a></li>
				<li><a data-tooltip="tooltip" data-placement="top" title="Quick Shop" data-toggle="modal" data-target="#productQuick" href="#"><i class="fal fa-search-plus"></i></a></li>
				<li><a data-tooltip="tooltip" data-placement="top" title="Add to Wishlist" href="#"><i class="fal fa-heart"></i></a></li>
				<li><a data-tooltip="tooltip" data-placement="top" title="Add to Compare" href="#"><i class="fal fa-repeat-alt"></i></a></li>
			</ul>
		<span class="discount">${discount * 100}%</span>

		</div>
		<div class="product-content d-flex justify-content-between">
			<div class="product-title">
				<h4 class="title text-uppercase"><a href="detail-product.html?id=${id}">
					${name}
					</a></h4>
			</div>
			<div class="product-price">
				<span class="price">
				${Number(price).toLocaleString("vi", {
			style: "currency",
			currency: "VND",
		})}						
			</span>
			</div>
		</div>
	</div>

</div>
	`
	listProduct.insertAdjacentHTML('beforeend', html)

}