import React from 'react';
import './firstscreen.css';

function FirstScreen() {
  return (
    <div className="search-page">
      {/* Encabezado con imagen y texto */}
      <header className="header">
        <img
          src="https://path/to/your/car-image.jpg"
          alt="Car Banner"
          className="header-image"
        />
        <div className="header-text">
          <h1>Imagine the possibilities</h1>
        </div>
      </header>

      {/* Sección de búsqueda */}
      <section className="search-section">
        <div className="search-tabs">
          <button className="tab active">Make</button>
          <button className="tab">Body style</button>
          <button className="tab">Electric</button>
        </div>

        <div className="search-form">
          <select className="dropdown">
            <option>New/Used</option>
            <option>New</option>
            <option>Used</option>
          </select>

          <select className="dropdown">
            <option>Make</option>
            <option>Kia</option>
            <option>Toyota</option>
            <option>Honda</option>
          </select>

          <select className="dropdown">
            <option>Model</option>
            <option>Telluride</option>
            <option>Sorento</option>
            <option>Optima</option>
          </select>

          <select className="dropdown">
            <option>Price</option>
            <option>No max price</option>
            <option>$20,000</option>
            <option>$50,000</option>
          </select>

          <select className="dropdown">
            <option>Distance</option>
            <option>20 miles</option>
            <option>50 miles</option>
            <option>100 miles</option>
          </select>

          <input type="text" placeholder="ZIP" className="zip-input" />

          <button className="search-button">Search</button>
        </div>
        <a href="#" className="advanced-search">Advanced search</a>
      </section>

      {/* Categorías populares */}
      <section className="categories">
        <h2>Popular categories</h2>
        <div className="category-buttons">
          <button className="category-button active">Electric</button>
          <button className="category-button">SUV</button>
          <button className="category-button">Sedan</button>
          <button className="category-button">Pickup Truck</button>
          <button className="category-button">Luxury</button>
          <button className="category-button">Crossover</button>
          <button className="category-button">Hybrid</button>
          <button className="category-button">Diesel</button>
          <button className="category-button">Coupe</button>
          <button className="category-button">Hatchback</button>
          <button className="category-button">Wagon</button>
          <button className="category-button">Convertible</button>
        </div>
        {/* Agregar imágenes de autos */}
        <div className="car-gallery">
          <img src="https://path/to/car1.jpg" alt="Car 1" />
          <img src="https://path/to/car2.jpg" alt="Car 2" />
          <img src="https://path/to/car3.jpg" alt="Car 3" />
        </div>
      </section>
    </div>
  );
}

export default FirstScreen;
