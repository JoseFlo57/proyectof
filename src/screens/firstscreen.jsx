import React, { useState, useEffect } from 'react';
import './firstscreen.css';  // Asegúrate de importar el archivo CSS

function FirstScreen() {
  const [isVisible, setIsVisible] = useState(false);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Función para mostrar el botón al hacer scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);  // Muestra el botón si se ha desplazado más de 300px
    } else {
      setIsVisible(false); // Oculta el botón si no
    }
  };

  // Usar useEffect para escuchar el scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="first-screen-container">
      {/* Aquí va el resto de tu contenido */}
      <header>
        {/* Aquí va tu encabezado y contenido */}
      </header>
      
      <section className="hero-section" aria-label="Sección principal para venta de autos">
        <h1>Encuentra tu Auto Ideal</h1>
        <p>Explora nuestra amplia selección de autos y encuentra el que más te guste.</p>
      </section>

      {/* Apartado 1 */}
      <section className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Buscar autos..." 
          aria-label="Buscar autos"
        />
        <button className="search-button">Buscar</button>
      </section>

      <section id="autos" className="car-gallery">
        <h2>Nuestros Autos Destacados</h2>
        <div className="car-cards">
          <div className="car-card" role="article">
            <img src="/camaro.jpeg" alt="Auto sedán modelo 2023" className="car-image"/>
            <h3>Sedán 2023</h3>
            <p className="price">$25,000</p>
            <button className="buy-button">Comprar Ahora</button>
          </div>
          <div className="car-card" role="article">
            <img src="/camaro.jpeg" alt="Auto SUV modelo 2023" className="car-image"/>
            <h3>SUV 2023</h3>
            <p className="price">$35,000</p>
            <button className="buy-button">Comprar Ahora</button>
          </div>
        </div>
      </section>

      {/* Apartado 2 */}
      <section id="autos" className="car-gallery">
        <h2>Recientes Agregados</h2>
        <div className="car-cards">
          <div className="car-card" role="article">
            <img src="/camaro.jpeg" alt="Auto sedán modelo 2023" className="car-image"/>
            <h3>Sedán 2023</h3>
            <p className="price">$25,000</p>
            <button className="buy-button">Comprar Ahora</button>
          </div>
          <div className="car-card" role="article">
            <img src="/camaro.jpeg" alt="Auto SUV modelo 2023" className="car-image"/>
            <h3>SUV 2023</h3>
            <p className="price">$35,000</p>
            <button className="buy-button">Comprar Ahora</button>
          </div>
        </div>
      </section>

      {/* Apartado 3 */}
      <section id="autos" className="car-gallery">
        <h2>Nuestros Deportivos</h2>
        <div className="car-cards">
          <div className="car-card" role="article">
            <img src="/camaro.jpeg" alt="Auto sedán modelo 2023" className="car-image"/>
            <h3>Sedán 2023</h3>
            <p className="price">$25,000</p>
            <button className="buy-button">Comprar Ahora</button>
          </div>
          <div className="car-card" role="article">
            <img src="/camaro.jpeg" alt="Auto SUV modelo 2023" className="car-image"/>
            <h3>SUV 2023</h3>
            <p className="price">$35,000</p>
            <button className="buy-button">Comprar Ahora</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 CarSales. Todos los derechos reservados.</p>
      </footer>

      {/* Botón flotante */}
      <button
        className={`scroll-to-top ${isVisible ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
}

export default FirstScreen;  {/* Exportar correctamente el componente */}
