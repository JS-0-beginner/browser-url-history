//Showing Ready Results
const addItem = () =>
{
    const productNames = document.getElementById('product-name');
    const names = productNames.value;

    if(!names)
    {
        return;
    }

    //Display
    displayProduct(names);
    
    //Add to Local storage
    addProductCart(names);

    //clear
    productNames.value = '';
}

const displayProduct = names =>
{
    const productUl = document.getElementById('products');
    const productLi = document.createElement('li');
    productLi.innerText = names;

    productUl.appendChild(productLi);
}

//Getting the API Object
const getCart = () =>
{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart)
    {
        cartObj = JSON.parse(cart);
    }
    else
    {
        cartObj = {};
    }
    return cartObj;
}

//Adding product names to API Cart-Object
const addProductCart = names =>
{
    const cart = getCart();
    if(cart[names])
    {
        cart[names] = cart[names] + 1; //product quantity
    }
    else
    {
        cart[names] = 1; //product quantity
    }
    console.log(cart); //Test

    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

//Showing Previous Results
const previousLocalStorageCart = () =>
{
    const cart = getCart();
    for(const names in cart)
    {
        displayProduct(names);
    }
}
previousLocalStorageCart();

//Place Order
const placeOrder = () =>
{
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

