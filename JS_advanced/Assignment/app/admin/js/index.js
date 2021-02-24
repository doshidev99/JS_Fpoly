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
    lengthAllProduct.innerText = result?.length;
    const html = result
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
            <td>${el.status === "1" ? "còn hàng" : "hết hàng"}</td>
            <td>
              <button class="btn-edit btn btn-success"
              data-bs-toggle="modal" data-bs-target="#exampleModal"
              onClick="handleEdit(${el.id})"> Edit </button>
              <button class="btn-del btn btn-danger"  onClick="handleDelete(${
                el.id
              })"> Delete </button>
            </td>
          </tr>
        `;
      })
      .join(" ");
    listProduct.innerHTML = html;
  })
  .catch((err) => console.log("Request Failed", err));

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
            <td>${el.status === "1" ? "còn hàng" : "hết hàng"}</td>
            <td>
            <button class="btn-edit btn btn-success"
              data-bs-toggle="modal" data-bs-target="#exampleModal"
              onClick="handleEdit(${el.id})"> Edit </button>
            <button class="btn-del btn btn-danger"  onClick="handleDelete(${
              el.id
            })"> Delete </button>
            </td>
          </tr>
      `;
        })
        .join(" ");
      listProduct.innerHTML = html;
    })
    .catch((err) => console.log("Request Failed", err));
});

const handleDelete = (id) => {
  requestApi(`http://localhost:3000/products/${id}`, "DELETE");
};

// edit modal

const editProduct = document.querySelector(".form-product-edit");

editProduct.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    name,
    price,
    detail,
    image,
    discount,
    status,
    category,
    id,
    imgTemp,
  } = editProduct;

  requestApi(`${urlProduct}/${id.value}`, "PATCH", {
    id: id.value,
    name: name.value,
    cate_id: "Herc Dangl",
    price: price.value,
    detail: detail.value,
    image: image?.files[0]?.name ? image.files[0].name : imgTemp.value,
    discount: discount.value / 100,
    status: status.value,
    category: category.value,
  });
});

const handleEdit = (id) => {
  requestApi(`http://localhost:3000/products/${id}`)
    .then((response) => response.json())
    .then(async (result) => {
      editProduct.id.value = result.id;
      editProduct.name.value = result.name;
      editProduct.price.value = Number(result.price);
      editProduct.discount.value = result.discount * 100;
      editProduct.detail.value = result.detail;
      editProduct.status.value = result.status;
      editProduct.imgTemp.value = result.image;
    })
    .catch((err) => console.log("Request Failed", err));
};
