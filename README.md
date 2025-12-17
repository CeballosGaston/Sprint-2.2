# 🛒 Shopping Cart – Vanilla JavaScript

A **shopping cart project** built using only **HTML, CSS, and Vanilla JavaScript**. 
The main goal is to practice **state management**, **DOM manipulation**, **data persistence with LocalStorage**, and a **clean functional architecture** without frameworks.

---


## 📌 Features

* Add products to the cart
* Increase / decrease item quantities
* Remove products individually
* Clear the entire cart
* Automatic total calculation
* Product-based promotions and discounts
* Data persistence using `localStorage`
* Cart state preserved after page refresh

---

## 🧠 Key Concepts Practiced

* Global state management in JavaScript
* Separation of concerns (state / logic / render)
* Pure functions vs side-effect functions
* Derived state reconstruction
* Dynamic DOM manipulation

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* LocalStorage API

---

## 📂 Project Structure

```
Sprint 2.2
│
├── index.html
├── checkout.html
├── css/
│   └── styles.css
├── js/
│   ├── checkout.js
│   └── shop.js
├── images
├── jazz albums
└── README.md
```

---

## 🧩 Cart Logic

### Main State

* `cart`: array containing the products in memory
* `count`: total number of items

Both are synchronized with `localStorage`.

---

### Initialization Flow

1. Read persisted data from `localStorage`
2. Rebuild derived state (subtotals and promotions)
3. Render cart items
4. Update total amount and UI controls

---

## 💸 Promotions Implemented

| Product ID | Condition  | Discount |
| ---------- | ---------- | -------- |
| ID 1       | ≥ 3 units  | 20% OFF  |
| ID 3       | ≥ 10 units | 30% OFF  |

*(Easily editable and scalable)*

---

## 📐 Cart Rendering

* Dynamic table generation (`<tbody>` built with JS)
* `+` and `-` buttons per product
* Real-time total calculation
* Checkout button automatically enabled/disabled

---

## 🔒 Persistence

The cart data is stored in `localStorage`:

```js
localStorage.setItem("productsInCart", JSON.stringify(cart));
localStorage.setItem("count", JSON.stringify(count));
```

Derived values (subtotals and totals) are **not persisted** — they are recalculated on load.

---

* Clear separation between logic, rendering, and persistence

---


## ✨ Author

**Gastón Ceballos**
Project developed as advanced JavaScript practice.

