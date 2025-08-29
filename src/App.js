import React from 'react';
import './App.css';  // Global styles for the app
import Header from './components/Header';  // Import the navigation and progress bar
import MainPage from './pages/MainPage';  // Import the main page with all sections
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />  {/* Include the navigation bar and progress bar */}
      <MainPage />  {/* Add all the sections (Home, About, Skills, etc.) */}
    </div>
  );
}

export default App;
