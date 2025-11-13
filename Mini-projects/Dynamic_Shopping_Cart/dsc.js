const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Keyboard", price: 1500 },
  { id: 5, name: "Smartwatch", price: 7000 },
];

const productsContainer = document.querySelector(".js-product-container");
const cartContainer = document.querySelector(".js-cart-container");

// Rendering cart
const cart = [];

// Rendering products
let productsHTML = "";
products.forEach((product) => {
  let html = `
    <p>${product["name"]}</p>
    <p>${product.price}</p>
    <button class="js-addToCart-btn" data-product-id="${product["id"]}">Add to cart</button>
    `;

  productsHTML += html;
});

productsContainer.innerHTML = productsHTML;

// Adding to the cart
const addToCartBtn = document.querySelectorAll(".js-addToCart-btn");
addToCartBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = parseInt(button.dataset.productId);

    const getProduct = products.find((product) => product.id === productId);

    const cartItem = cart.find((cartItem) => cartItem.id === productId);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({
        id: getProduct.id,
        name: getProduct.name,
        price: getProduct.price,
        quantity: 1,
      });
    }

    renderCart();
  });
});

function renderCart() {
  cartContainer.innerHTML = "";

  cart.forEach((cartItem) => {
    cartContainer.innerHTML += `
            <p>${cartItem["name"]}</p>
            <p>${cartItem["price"]}</p>
            <p>${cartItem["quantity"]}</p>
            <button class="js-remove-btn" data-product-id="${cartItem.id}">Remove</button>
        `;
  });

  const removeBtn = document.querySelectorAll(".js-remove-btn");

  removeBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.productId);
      const getProductId = cart.find((cartItem) => cartItem.id === productId);

      // Because we have to provide index while using splice(index, value)
      cart.splice(cart.indexOf(getProductId), 1);

      renderCart();
    });
  });
}
