const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "imgs/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "imgs/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "imgs/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "imgs/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "imgs/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "imgs/prosciutto.jpg",
    soldOut: false,
  },
];

const menuTitle =
  "Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.";

const menuContainer = document.querySelector("#menu-container");

const p = document.createElement("p");
p.innerText = menuTitle;
menuContainer.append(p);
// *****************
const ul = document.createElement("ul");
ul.classList.add("pizzas");

// *****************

pizzaData.forEach(function (pizza) {
  console.log("pizza", pizza);
  //   const li = document.createElement("Li");
  const li = createElement("li");

  li.classList.add("pizza");

  if (pizza.soldOut) {
    li.classList.add("sold-out");
  }

  const img = document.createElement("img");
  img.src = pizza.photoName;
  img.alt = pizza.name;
  const div = document.createElement("div");

  const h3 = document.createElement("h3");
  h3.textContent = pizza.name;

  const p1 = document.createElement("p");
  p1.textContent = pizza.ingredients;

  const span = document.createElement("span");
  span.textContent = pizza.soldOut ? "SOLD OUT" : pizza.price;
  div.append(h3);
  div.append(p1);
  div.append(span);

  li.append(img);
  li.append(div);
  ul.append(li);
});

function createElement(element) {
  return document.createElement(element);
}

menuContainer.append(ul);
