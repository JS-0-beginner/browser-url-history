//Showing Ready Results
const addItem = () => {
  const items = document.getElementById("product-name");
  const productName = items.value;

  if (!productName) {
    return;
  }

  //Display
  displayProduct(productName);

  //Add to Local storage
  addProductCart(productName);

  //clear
  items.value = "";
};

//Display Product Mechanism
const displayProduct = (productName) => {
  const productUl = document.getElementById("products");
  const productLi = document.createElement("li");
  productLi.innerText = productName;

  productUl.appendChild(productLi);
};

//Checking for Getting the Cart-Object(Key-Value) from Local Storage
//(1)Here cartObj=value and 'cart'=key which is declared by >beforeCart<
const getCart = () => {
  const beforeCart = localStorage.getItem("cart");
  let cartObj;
  if (beforeCart) {
    cartObj = JSON.parse(beforeCart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

//Adding product names to Cart-Object(Key-Value) in Local Storage
const addProductCart = (productName) => {
  const products = getCart();
  if (products[productName]) {
    products[productName] = products[productName] + 1; //product quantity
  } else {
    products[productName] = 1; //cartObj = { { products[productName]) : (1) } }
  }
  console.log(products); //Test

  const productsStringified = JSON.stringify(products);
  localStorage.setItem("cart", productsStringified);
};

//Showing Previous Results
const previousLocalStorageCart = () => {
  const cart = getCart();
  for (const everyProduct in cart) {
    displayProduct(everyProduct);
  }
};
previousLocalStorageCart();

//Place Order
const placeOrder = () => {
  document.getElementById("products").textContent = "";
  localStorage.removeItem("cart");
};
