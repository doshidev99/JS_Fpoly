const category = document.getElementById("category");

db.collection('categories').get().then(querySnapShot => {
  querySnapShot.forEach(el => {
    renderCategories(el)
  })
})


const renderCategories = (dataCategory) => {
  const { name, value } = dataCategory.data()
  const html = `
    <option value=${value}>${name}</option>
  `
  category.insertAdjacentHTML('beforeend', html)
}


const listProduct = document.getElementById("listProduct");
const lengthAllProduct = document.getElementById("length-all-product");
const modalEdit = document.querySelector(".form-product-edit");


db.collection('products').get().then(querySnapShot => {
  querySnapShot.forEach((product) => {
    renderProduct(product)
  })
  lengthAllProduct.innerHTML = querySnapShot.size
})



const renderProduct = (product) => {
  const { name, price, image, detail, discount, status, id } = product.data()

  const html = `
    <tr data-id="${product.id}">
      <td>${name}</td>
      <td> <img style="width: 40px" src="./assets/img/product/${image}" alt="" /> </td>
      <td>
      ${Number(price).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}
      </td>
      <td>${detail}</td>
      <td>${discount * 100}%</td>
      <td>${status === "1" ? `<span class="text-success"> còn hàng </span>` : `<span class="text-danger" > hết hàng </span> `
    }</td>
  <td>
    <button class="btn-edit btn btn-success"
      data-bs-toggle="modal" data-bs-target="#exampleModal"
    > Edit </button>
    <button class="btn-del btn btn-danger"> Delete </button>
  </td>
    </tr >
  `

  listProduct.insertAdjacentHTML('beforeend', html)

  const btnDel = document.querySelector(`[data-id = '${product.id}'] .btn-del`);

  btnDel.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('delete: ', product.data().name)
    db.collection('products').doc(`${product.id} `).delete().then(() => {
      alert('delete successed!')
      location.reload();
    })
  })



  const btnEdit = document.querySelector(`[data-id = '${product.id}'] .btn-edit`);


  btnEdit.addEventListener('click', (e) => {
    e.preventDefault();
    const { name, price, image, detail, discount, status, category } = product.data()

    // id is id of table product doesn't id of data product
    modalEdit.id.value = product.id;
    modalEdit.name.value = name;
    modalEdit.price.value = (+price);
    modalEdit.discount.value = (+discount) * 100;
    modalEdit.detail.value = detail;
    modalEdit.status.value = status;
    // set image temp save value when the first rendering and fill data on form
    modalEdit.imgTemp.value = image;
    modalEdit.category.value = (+category)

  })


}


const searchCategory = document.getElementById("search-category");


searchCategory.addEventListener("submit", (e) => {
  e.preventDefault();
  const { category: { value: forkValueIdCategory } } = searchCategory;

  db.collection('products').get().then(querySnapShot => {
    let arr = [];
    querySnapShot.forEach((product) => {

      if ((+product.data().category) === (+forkValueIdCategory)) {
        arr.push(product.data())
        listProduct.innerHTML = ' ';
      }

    })

    arr.map(el => renderProductWithArrayRefactor(el))
    lengthAllProduct.innerHTML = arr.length
  })

});


const renderProductWithArrayRefactor = (product) => {
  const { name, price, image, detail, discount, status, id } = product

  const html = `
  < tr data-id="${id}" >
      <td>${name}</td>
      <td> <img style="width: 40px" src="./assets/img/product/${image}" alt="" /> </td>
      <td>
      ${Number(price).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}
      </td>
      <td>${detail}</td>
      <td>${discount * 100}%</td>
      <td>${status === "1" ? `<span class="text-success"> còn hàng </span>` : `<span class="text-danger" > hết hàng </span> `
    }</td>      <td>
        <button class="btn-edit btn btn-success"
        data-bs-toggle="modal" data-bs-target="#exampleModal"
        > Edit </button>
        <button class="btn-del btn btn-danger"> Delete </button>
      </td>
    </tr >
  `

  listProduct.insertAdjacentHTML('beforeend', html)

  const btnDel = document.querySelector(`[data-id = '${product.id}'] .btn-del`);

  btnDel.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('products').doc(`${product.id} `).delete().then(() => {
      alert('delete successed!')
      location.reload();
    })
  })

  const btnEdit = document.querySelector(`[data-id = '${product.id}'] .btn-edit`);

  btnEdit.addEventListener('click', (e) => {
    e.preventDefault();
    const { name, price, image, detail, discount, status, category } = product.data()

    // id is id of table product doesn't id of data product
    modalEdit.id.value = product.id;
    modalEdit.name.value = name;
    modalEdit.price.value = (+price);
    modalEdit.discount.value = (+discount) * 100;
    modalEdit.detail.value = detail;
    modalEdit.status.value = status;
    // set image temp save value when the first rendering and fill data on form
    modalEdit.imgTemp.value = image;
    modalEdit.category.value = (+category)

  })

}


modalEdit.addEventListener('submit', (e) => {
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
  } = modalEdit;

  // eslint-disable-next-line no-console
  console.log(id.value, 'id');

  db.collection('products').doc(id.value).update({
    category: category.value,
    detail: detail.value,
    discount: (+discount.value) / 100,
    id: (+id.value),
    image: image?.files[0]?.name ? image.files[0].name : imgTemp.value,
    name: name.value,
    price: price.value,
    status: status.value,
  }).then(() => {
    alert('edit product on success .. !');
    location.reload();
  })
})