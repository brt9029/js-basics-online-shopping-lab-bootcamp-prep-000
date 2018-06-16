var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1
  cart.push(Object.assign({itemName: item}, {itemPrice: price}))
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartStatus = "In your cart, you have "
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length > 0) {
    var updated = []
    for (let i = 0; i < cart.length; i++){
      updated.push(Object.values(cart[i]))
      updated = `${updated[i][0]} at $${updated[i][1]}.`
    }
    return updated
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
