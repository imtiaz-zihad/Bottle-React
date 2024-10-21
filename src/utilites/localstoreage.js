const getStorageCart = () => {
  const storeCartString = localStorage.getItem("cart");
  if (storeCartString) {
    return JSON.parse(storeCartString);
  }
  return [];
};

const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const addToLS = id =>{
    const cart = getStorageCart();
    cart.push(id);
    //save to local Storage 
    saveCartToLS(cart)
}

const removeFromLS = id =>{
    const cart = getStorageCart();
    // removing every id 
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining)
} 
export{addToLS, getStorageCart, removeFromLS}