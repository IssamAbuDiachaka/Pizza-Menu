# 🍕 Fast React Pizza Company

A simple and elegant React application showcasing a pizza menu with real-time restaurant status updates.

## 📋 Overview

The Pizza App is a React-based web application that displays a pizzeria's menu with multiple pizza options. It features a clean, component-based architecture demonstrating fundamental React concepts including JSX, components, and props.

## ✨ Features

- **Dynamic Header**: Displays the pizzeria name prominently
- **Interactive Menu**: Showcases six different pizza options with images, descriptions, and prices
- **Live Footer**: Shows real-time restaurant status and current time
- **Responsive Design**: Clean and organized layout
- **Component-Based Architecture**: Modular and maintainable code structure

## 🏗️ Project Structure

```
pizza-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── Pizzas/
│       ├── Pizza1.avif
│       ├── pizza2.jpg
│       ├── pizza3.jpg
│       └── pizza4.jpg
├── src/
│   ├── App.css
│   ├── App.js (to be created)
│   ├── index.css
│   ├── index.js
│   ├── Pizza.js
│   └── reportWebVitals.js
├── package.json
└── README.md
```

## 🧩 Components

### 1. Header Component

- Displays the pizzeria name: "Fast React Pizza Company"
- Positioned at the top of the page

### 2. Menu Component

- Contains the menu title: "Our Menu"
- Renders six Pizza components
- Acts as the main content area

### 3. Pizza Component

- Displays individual pizza information:
  - Pizza image
  - Pizza name
  - Description
  - Price
- Reusable component for different pizza types

### 4. Footer Component

- Shows restaurant status: "We're currently open"
- Displays current time (updates dynamically)
- Positioned at the bottom of the page

### 5. App Component

- Root component that orchestrates all other components
- Wraps everything in a container div

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd pizza-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

## 💻 Usage

The application will automatically display:

- The pizzeria header at the top
- A menu section with six pizza options
- A footer with the current time and restaurant status

## 🎨 Customization

### Adding New Pizzas

To add more pizzas to the menu, simply add more `<Pizza />` components in the Menu component:

```jsx
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      {/* Add more Pizza components here */}
    </main>
  );
}
```

### Styling

- Modify `App.css` for component-specific styles
- Modify `index.css` for global styles

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🛠️ Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Create React App](https://create-react-app.dev/) - React application boilerplate
- JSX - JavaScript XML syntax extension

## 📚 Learning Objectives

This project demonstrates:

- React component creation and composition
- JSX syntax and usage
- Single parent element rule in React
- Component-based architecture
- Dynamic content rendering
- Basic styling with CSS

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built with ❤️ as a React learning project

## 🙏 Acknowledgments

- HackerBoost React Mastery Course
- React documentation and community
- Pizza lovers everywhere 🍕

---

**Note**: This is a learning project designed to demonstrate fundamental React concepts. Feel free to extend and customize it for your needs!
