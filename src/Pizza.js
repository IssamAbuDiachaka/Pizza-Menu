import "./App.css";
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
      <h1>Fast React Pizza Component</h1>
    </header>
  );
}

function Pizza() {
  return (
    <div>
      <img src="/Pizzas/Pizza1.avif" alt="Pizza Puchochu" />
      <h3>Pizza Puchochu</h3>
      <p>Pizza Puchuchu, great for very hungry guys</p>
      <p>$50.00</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <Footer className="footer">
      <h2>We are currently open!!!</h2>
    </Footer>
  );
}
export default PizzaApp;
