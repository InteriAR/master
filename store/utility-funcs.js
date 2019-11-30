//sorts raw productData by className key
// [{}, {}, {}] = productData
//returns an object with key category and value as array of product objects
export function sortByClassName(productData) {
  const productsByClassName = {}
  productData.forEach(function (prodObj) {
    const prodList = [...prodObj.data]
    prodList.forEach(function (prod) {
      let className = prod.class_name
      if (productsByClassName.hasOwnProperty(className)) {
        productsByClassName[className].push(prod)
      } else {
        productsByClassName[className] = [prod]
      }
    })
  })
  return productsByClassName
}

//this function returns an array of objects where each object has keys category and productList
// (13)[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {category: "Accent Chairs", productList: Array(13)}
export function formatProducts(productsByClassName) {
  const formattedProducts = Object.entries(productsByClassName).map(([k, v]) => ({ category: k, productList: v }))
  // this.setState({ products: formattedProducts })
  return formattedProducts
}

