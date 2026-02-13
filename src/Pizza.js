import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/Pizzas/Pizza1.avif",
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "/Pizzas/pizza2.jpg",
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/Pizzas/pizza3.jpg",
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "/Pizzas/pizza4.jpg",
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "/Pizzas/pizza2.jpg",
    spicy: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/Pizzas/pizza3.jpg",
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
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Pizza({ pizza }) {
  return (
    <div className="pizza-card">
      <div className="pizza-image-container">
        <img src={pizza.photoName} alt={pizza.name} />
        {pizza.spicy && <div className="spicy-badge">SPICY</div>}
      </div>
      <div className="pizza-info">
        <div className="pizza-header">
          <h3>{pizza.name}</h3>
          <span className="pizza-price">
            €{pizza.price.toFixed(2)}
          </span>
        </div>
        <p className="pizza-description">{pizza.ingredients}</p>
        <button className="add-to-cart-btn">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Signature Menu</h2>
      <p className="menu-description">
        Authentic recipes, sourdough crust, and local ingredients. Each pizza is crafted with love and baked at 450°C.
      </p>
      <div className="pizza-grid">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      <h2>{isOpen ? "We're currently open!" : "Sorry, we're closed"}</h2>
      <p>{new Date().toLocaleTimeString()} - {isOpen ? `Visit us until ${closeHour}:00` : `Come back at ${openHour}:00`}</p>
    </footer>
  );
}

export default PizzaApp;
