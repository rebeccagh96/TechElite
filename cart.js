let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");

let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");

let body = document.querySelector(".cart-body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Product 1",
    image: "Buds1.svg",
    price: 200,
  },
  {
    id: 1,
    name: "Product 2",
    image: "Buds2.svg",
    price: 200,
  },
  {
    id: 1,
    name: "Product 3",
    image: "Buds3.svg",
    price: 200,
  },
  {
    id: 1,
    name: "Product 4",
    image: "Buds4.svg",
    price: 200,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src="img/Products/Earbuds/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>
        `;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `<div><img src="img/Products/Earbuds/${
        value.image
      }"/></div>
      <div>${value.name}</div>
      <div>${value.price.toLocaleString()}</div>
      <div>${value.quantity}</div>
      <div>
      <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
      <div class="count"${value.quantity}>
      <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>

      </div>

`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
