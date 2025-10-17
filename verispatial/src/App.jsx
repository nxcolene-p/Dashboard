import React from 'react';
import Header from './components/Header';
import './index.css'; // include global + color styles

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <h2>Welcome to the Dashboard</h2>
        <p>The 3D model will appear here soon.</p>
      </main>
    </div>
  );
}

export default App;
