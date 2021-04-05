
const productModel = (data) => {
    const {name, price, description, image, cateId} = data;
    const date = new Date()
    // const dateUpdate = date.toLocaleDateString()
    const product = {
        name,
        price,
        description,
        image,
        cateId
    }
    return product
}

module.exports = {productModel}