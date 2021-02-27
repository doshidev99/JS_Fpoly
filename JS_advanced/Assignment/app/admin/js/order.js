const urlOrder = "http://localhost:3000/orders";

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

const listOrder = document.getElementById("listOrder");
const lengthAllOrder = document.getElementById("length-all-order");
const pendingOrder = document.getElementById("pending-order");
const searchOrder = document.getElementById("search-order");

const renderOrder = () => {
  requestApi(urlOrder)
    .then((response) => response.json()) // convert to json
    .then(async (result) => {
      lengthAllOrder.innerText = result?.length;
      pendingOrder.innerText = result?.filter(
        (e) => e.status === false
      )?.length;

      const html = result
        .map((el, index) => {
          return `
          <tr>
            <td >${index + 1}</td>
            <td>${el.customer_address}</td>
            <td>${el.customer_phone_number}</td>
            <td>${el.note}</td>
            <td>${el.created_date}</td>
            <td>${
              el.status
                ? '<span class="text-success">Đã xác thực </span>'
                : '<span class="text-danger">Đợi xác thực </span>'
            }</td>
          </tr>
        `;
        })
        .join(" ");
      listOrder.innerHTML = html;
    })
    .catch((err) => console.log("Request Failed", err));
};

renderOrder();

searchOrder.addEventListener("submit", (e) => {
  e.preventDefault();
  const _id = searchOrder.id_order.value;

  if (_id.trim().length <= 0) {
    renderOrder();
  } else {
    requestApi(urlOrder)
      .then((response) => response.json())
      .then(async (result) => {
        lengthAllOrder.innerText = result?.length;
        const _result = result.filter((el) => Number(el.id) === Number(_id));

        const html = _result
          .map((el) => {
            return `
						<tr>
							<td >${el.id}</td>
							<td>${el.customer_address}</td>
							<td>${el.customer_phone_number}</td>
							<td>${el.note}</td>
							<td>${el.created_date}</td>
							<td>${
                el.status
                  ? '<span class="text-success">Đã xác thực </span>'
                  : '<span class="text-danger">Đợi xác thực </span>'
              }</td>
						</tr>
					`;
          })
          .join(" ");
        listOrder.innerHTML = html;
      })
      .catch((err) => console.log("Request Failed", err));
  }
});
