//Showing Ready Results
const addItem = () =>
{
    const productNames = document.getElementById('product-name');
    const names = productNames.value;

    //Display
    displayProduct(names);
    if(!names)
    {
        return;
    }

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

const addProductCart = names =>
{
    const cart = getCart();
    if(cart[names])
    {
        cart[names] = cart[names] + 1;
    }
    else
    {
        cart[names] = 1;
    }
    // console.log(cart);
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

