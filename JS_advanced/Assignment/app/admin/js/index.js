// const el_category = document.getElementById("category");

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

const category = document.getElementById("category");

requestApi("http://localhost:3000/categories")
  .then((response) => response.json()) // convert to json
  .then((result) => {
    const html = result
      .map((el) => {
        return `
        <option value=${el.value}>${el.name}</option>
    `;
      })
      .join(" ");
    category.innerHTML = `
      <select
        name="category"
        style="border: none; border-radius: 3px"
      >
        ${html}
      </select>
    `;
  }) //print data to console
  .catch((err) => console.log("Request Failed", err));

const listProduct = document.getElementById("listProduct");
const lengthAllProduct = document.getElementById("length-all-product");

requestApi("http://localhost:3000/products")
  .then((response) => response.json()) // convert to json
  .then(async (result) => {
    result.forEach((el, index) => {
      renderProducts(el, index);
    });

    lengthAllProduct.innerText = result?.length;

    // const btnDel = document.querySelector(`.btn-del`);

    // btnDel.addEventListener("click", (e) => {
    //   console.log("clicked");
    // });
  })
  .catch((err) => console.log("Request Failed", err));

const renderProducts = (el, index) => {
  const ouput = `
    <tr>
      <td>${index + 1}</td>
      <td>${el.name}</td>
      <td> <img style="width: 40px" src="./assets/img/product/${
        el.image
      }" alt="" /> </td>
      <td>${el.price}</td>
      <td>${el.detail}</td>
      <td>${el.discount * 100}%</td>
      <td>${el.status === 1 ? "còn hàng" : "hết hàng"}</td>
      <td>
        <div id="" class="btn-edit btn btn-success"> Edit </div>
        <div id="btn-del" class="btn-del btn btn-danger"> Delete </div>
      </td>
    </tr>
  `;

  listProduct.insertAdjacentHTML("beforeend", ouput);
};
// search category
const searchCategory = document.getElementById("search-category");

searchCategory.addEventListener("submit", (e) => {
  e.preventDefault();
  const { category } = searchCategory;

  requestApi("http://localhost:3000/products")
    .then((response) => response.json())
    .then(async (result) => {
      lengthAllProduct.innerText = result?.length;
      const _result = result.filter(
        (el) => Number(el.category) === Number(category.value)
      );

      const html = _result
        .map((el, index) => {
          return `
          <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td> <img style="width: 40px" src="./assets/img/product/${
              el.image
            }" alt="" /> </td>
            <td>${el.price}</td>
            <td>${el.detail}</td>
            <td>${el.discount * 100}%</td>
            <td>${el.status === 1 ? "còn hàng" : "hết hàng"}</td>
            <td>
              <div id="" class="btn-edit btn btn-success"> Edit </div>
              <div id="btn-del" class="btn-del btn btn-danger"> Delete </div>
            </td>
          </tr>
      `;
        })
        .join(" ");
      listProduct.innerHTML = html;
    })
    .catch((err) => console.log("Request Failed", err));
});
