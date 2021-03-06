const listOrder = document.getElementById("listOrder");
const lengthAllOrder = document.getElementById("length-all-order");
const pendingOrder = document.getElementById("pending-order");
const searchOrder = document.getElementById("search-order");

db.collection('orders').get().then(querySnapShot => {
  querySnapShot.forEach((product) => {
    renderOrder(product)
  })
  lengthAllOrder.innerHTML = querySnapShot.size
})

let count = 0;

const renderOrder = (order) => {
  const { customer_address, customer_phone_number, note, created_date, status } = order?.data()

  const html = `
          <tr>
            <td >${count + 1}</td>
            <td>${customer_address}</td>
            <td>${customer_phone_number}</td>
            <td>${note}</td>
            <td>${created_date}</td>
            <td>${status ? '<span class="text-success">Đã xác thực </span>' : '<span class="text-danger">Đợi xác thực </span>'}</td>
          </tr>
        `;
  listOrder.innerHTML = html;
}