//Showing Ready Results
const addItem = () => {
  const productNameField = document.getElementById("product-name");
  const productName = productNameField.value;
  //Error handler for blank input field
  if (!productName) {
    return;
  }
  //Display
  displayProduct(productName);

  //Add to Local storage
  addProductCart(productName);

  //clear
  productNameField.value = "";
};

//Display Product Mechanism
const displayProduct = (productNames) => {
  const productUl = document.getElementById("products");
  const productLi = document.createElement("li");
  productLi.innerText = productNames;

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
console.log(getCart()); //Test
//You can also check on browser's console by typing getCart()

//Adding product names to Cart-Object(Key-Value) in Local Storage
//Here, [productNames] is parameter of this function

const addProductCart = (productNames) => {
  const productsPair = getCart();

  // productsCart[productNames] = 1;

  //Quantity value for same name products
  if (productsPair[productNames]) {
    productsPair[productNames] = productsPair[productNames] + 1; // n... + 1
  } else {
    productsPair[productNames] = 1;
  }
  console.log(productsPair); //Test

  //Now setting products in local storage by stringifying because we can't put array/objects directly in local storage's value section, it will show [Object Object]. It only stores plain text / string
  const productsPairStringified = JSON.stringify(productsPair);
  localStorage.setItem("cart", productsPairStringified);
};

//Retrieving Local Storage in UI
const retrieveLSCart = () => {
  const lsCart = getCart();

  //Using for in because of object
  for (const productNames in lsCart) {
    console.log(productNames);
    displayProduct(productNames);
  }
};
retrieveLSCart();

//Place Order for deleting the particular 'cart' key-value pair
const placeOrder = () => {
  document.getElementById("products").textContent = "";
  localStorage.removeItem("cart");
};
