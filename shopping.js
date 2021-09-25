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

const displayProduct = (productName) => {
  const productUl = document.getElementById("products");
  const productLi = document.createElement("li");
  productLi.innerText = productName;

  productUl.appendChild(productLi);
};

//Checking for Getting the Cart-Object(key) from Local Storage
const getCart = () => {
  const beforecart = localStorage.getItem("cart");
  let cartObj;
  if (beforecart) {
    cartObj = JSON.parse(beforecart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

//Adding product names to Cart-Object in Local Storage
const addProductCart = (productName) => {
  const cart = getCart();
  if (cart[productName]) {
    cart[productName] = cart[productName] + 1; //product quantity
  } else {
    cart[productName] = 1; //product quantity
  }
  console.log(cart); //Test

  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
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
