const listOrder = document.getElementById("listOrder");
const pendingOrder = document.getElementById("pending-order");
const searchOrder = document.getElementById("search-order");
const params = new URL(window.location.href).searchParams;

const id_url = params.get("id");

db.collection('carts').get().then(querySnapShot => {
	querySnapShot.forEach((subDoc) => {
		const { id } = subDoc.data()
		if (id === id_url) {
			renderOrder(subDoc)
		}
	})
})

let count = 0;

const renderOrder = (order) => {
	const { sum, listProduct } = order?.data()

	const html = `
					<tr>
						<td>${listProduct.length}</td>
						<td>	${Number(sum).toLocaleString("vi", {
							style: "currency",
							currency: "VND",
						})}</td>
					</tr>
				`;
	listOrder.insertAdjacentHTML('beforeend', html)
}
