const addProduct = document.querySelector(".form-product");

addProduct.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, price, detail, image, discount, status, category } = addProduct;
  db.collection('products').add({
    id: Math.random(),
    name: name.value,
    price: price.value,
    detail: detail.value,
    image: image.files[0].name,
    discount: discount.value / 100,
    status: status.value,
    category: category.value,
  }).then(() => location.reload())
});


const uploadImage = () => {
  const ref = firebase.storage().ref();
  
  const file = document.querySelector('#photo').files[0];

  const metadata = {
    contentType: file.type
  };

  const name = file.name;
  const uploadImage = ref.child(name).put(file, metadata);

  uploadImage.then(snapshot => snapshot.ref.getDownloadURL()).then((url) => {
    // eslint-disable-next-line no-console
    console.log(url, '<----');
  }).catch(error => console.log(error))
}
