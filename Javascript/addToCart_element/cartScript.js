let cartQuantity = 0;

function showQuantity() {
  console.log(`Cart Quantity: ${cartQuantity}`);
}

function addToCart() {
  cartQuantity++;
  console.log(`Cart Quantity: ${cartQuantity}`);
}

function add2Items() {
  cartQuantity += 2;
  console.log(`Cart Quantity: ${cartQuantity}`);
}

function add3Items() {
  cartQuantity += 3;
  console.log(`Cart Quantity: ${cartQuantity}`);
}

function resetQuantity() {
  cartQuantity = 0;
  console.log(`Cart Quantity: ${cartQuantity}`);
}
