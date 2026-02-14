import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photo: "/Pizzas/Pizza1.avif",
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photo: "/Pizzas/pizza2.jpg",
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photo: "/Pizzas/pizza3.jpg",
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photo: "/Pizzas/pizza4.jpg",
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photo: "/Pizzas/pizza2.jpg",
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, aragula, and burrata cheese",
    price: 18,
    photo: "/Pizzas/pizza3.jpg",
  },
];

function PizzaApp() {
  return (
    <div className="main">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza Eatry</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p className="menu-description">
        Delicious pizzas made with fresh ingredients and baked to perfection,
        Life is a Pizza.
      </p>
      <div className="pizza-grid">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

function Pizza({ pizza }) {
  return (
    <div className="pizza-card">
      <div className="pizza-image-container">
        <img src={pizza.photo} alt={pizza.name} />
      </div>
      <div className="pizza-info">
        <div className="pizza-header">
          <h3>{pizza.name}</h3>
          <span className="pizza-price">€{pizza.price.toFixed(2)}</span>
        </div>
        <p className="pizza-description">{pizza.ingredients}</p>
        <button className="add-to-cart-btn">ADD TO CART</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <h2>We're currently open!, order your Pizzas</h2>
    </footer>
  );
}

export default PizzaApp;
