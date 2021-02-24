const url = "http://localhost:3000/products";

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

const addProduct = document.querySelector(".form-product");

addProduct.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, price, detail, image, discount, status, category } = addProduct;
  // eslint-disable-next-line no-console
  // console.log(name.value, "name.value");
  // console.log(price.value, "price.value");
  // console.log(detail.value, "detail.value");
  // console.log(image.files[0].name, "image.value");
  // console.log(discount.value, "discount.value");
  // console.log(status.value, "status.value");
  console.log(category.value, "category.value");

  requestApi(url, "POST", {
    id: Math.random(),
    name: name.value,
    cate_id: "Herc Dangl",
    price: price.value,
    detail: detail.value,
    image: image.files[0].name,
    discount: discount.value / 100,
    status: status.value,
    category: category.value,
  });
});
