// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
  {
    id: 1,
    name: "Kind of Blue",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Chet Stereo",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Chet Baker In New York",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "Blue Train",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Saxophone Colossus",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Giant Steps",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Body And Soul",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Ella Fitzgerald",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Sara Vaughan",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.

// let count = 0;
// let cart = [];
let cart = JSON.parse(localStorage.getItem("productsInCart")) || [];
let count = JSON.parse(localStorage.getItem("count")) || 0;

let total = 0;

// SELECTORS

//Disable Chekout BTN when the cart is empty

const checkbtn = document.getElementById("checkoutbtn");

function checkbtnHide() {
  if (cart.length === 0) {
    checkbtn.style.display = "none";
  } else {
    checkbtn.style.display = "inline";
  }
}
checkbtnHide();

const buyButtons = document.querySelectorAll(".add-to-cart");
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    buy(button.dataset.productId);
  });
});

const cleanCartButton = document.getElementById("clean-cart");
cleanCartButton.addEventListener("click", () => {
  cleanCart();
});

let totalPrice = document.getElementById("total_price");
totalPrice.innerHTML = 0;

// Exercise 1
const buy = (id) => {
  // 1. Loop for to the array products to get the item to add to cart
  // cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

  let foundProduct = null;

  for (let i = 0; i < products.length; i++) {
    const productId = Number(id);
    if (products[i].id === productId) {
      foundProduct = products[i];
      break;
    }
  }

  // 2. Add found product to the cart array

  const productInCart = cart.find((obj) => obj.id === foundProduct.id);

  if (!productInCart) {
    const productCopy = { ...foundProduct, quantity: 1 };
    cart.push(productCopy);
  } else {
    productInCart.quantity += 1;
  }

  applyPromotionsCart();

  count += 1;

  localStorage.setItem("productsInCart", JSON.stringify(cart));
  localStorage.setItem("count", JSON.stringify(count));

  // 3. Total print

  totalPrice.innerHTML = calculateTotal();
  printCart();
  checkbtnHide();
};

// Exercise 2
const cleanCart = () => {
  cart = [];
  count = 0;
  localStorage.removeItem("productsInCart");
  localStorage.removeItem("count");
  printCart();
  totalPrice.innerHTML = 0;
  checkbtnHide();
};

// Exercise 3
const calculateTotal = () => {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].subTotal;
  }
  return total.toFixed(2);

  // Calculate total price of the cart using the "cartList" array
};

console.log(calculateTotal());

// Exercise 4
const applyPromotionsCart = () => {
  // Apply promotions to each item in the array "cart"

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == 1 && cart[i].quantity >= 3) {
      cart[i].subTotal = cart[i].quantity * cart[i].price * 0.8;
    } else if (cart[i].id == 3 && cart[i].quantity >= 10) {
      cart[i].subTotal = cart[i].quantity * cart[i].price * 0.7;
    } else cart[i].subTotal = cart[i].quantity * cart[i].price;
  }

  localStorage.setItem("productsInCart", JSON.stringify(cart));
};

// Exercise 5

const printCart = () => {
  // Fill the shopping cart modal manipulating the shopping cart dom

  // const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];
  // const count = JSON.parse(localStorage.getItem("count"));
  let countProduct = document.getElementById("count_product");
  countProduct.innerHTML = count;

  const cartList = document.getElementById("cart_list");
  cartList.innerHTML = "";

  cart.forEach((product) => {
    const row = document.createElement("tr");

    const name = document.createElement("th");
    name.textContent = product.name;
    row.appendChild(name);

    const price = document.createElement("td");
    price.textContent = product.price;
    row.appendChild(price);

    const minusButton = document.createElement("button");
    minusButton.addEventListener("click", () => removeFromCart(product.id));
    minusButton.textContent = "-";
    row.appendChild(minusButton);

    const quantity = document.createElement("td");
    quantity.textContent = product.quantity;
    row.appendChild(quantity);

    const plusButton = document.createElement("button");
    plusButton.addEventListener("click", () => buy(product.id));
    plusButton.textContent = "+";
    row.appendChild(plusButton);

    const subtotal = document.createElement("td");

    subtotal.textContent = product.subTotal.toFixed(2);
    row.appendChild(subtotal);

    cartList.appendChild(row);
  });
};

printCart();

// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {
  let foundProduct = null;

  for (let i = 0; i < products.length; i++) {
    const productId = Number(id);
    if (products[i].id === productId) {
      foundProduct = products[i];
      break;
    }
  }

  const productInCart = cart.find((obj) => obj.id === foundProduct.id);

  if (productInCart.quantity === 1) {
    const productIndex = cart.findIndex((item) => item.id === id);
    cart.splice(productIndex, 1);
  } else {
    productInCart.quantity -= 1;
  }

  applyPromotionsCart();

  count -= 1;

  localStorage.setItem("productsInCart", JSON.stringify(cart));
  localStorage.setItem("count", JSON.stringify(count));

  // 3. Total print

  totalPrice.innerHTML = calculateTotal();
  printCart();
  checkbtnHide();
};

const open_modal = () => {
  printCart();
};
