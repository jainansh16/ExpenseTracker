// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Custom CSS file for styling

// Define the main App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Website</h1>
        <p>This is a simple starter template for a React app!</p>
      </header>
    </div>
  );
}

// Render the App component to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
