import React from 'react';
import './HomeView.css';

function HomeView() {
  return (
    <div className="home-container">
      <header className="promo-banner">
        <h1>Fundas Exclusivas para tu Celular</h1>
        <p>Explora nuestra colección de fundas personalizadas para cada estilo y modelo.</p>
        <button className="shop-now-button">Comprar Ahora</button>
      </header>

      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://images.pexels.com/photos/27836675/pexels-photo-27836675/free-photo-of-moda-creativo-apple-manzana.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Funda de ejemplo" />
            <h3>Funda de Mármol</h3>
            <p>$15.00</p>
            <button>Ver Detalles</button>
          </div>
          <div className="product-card">
            <img src="https://images.pexels.com/photos/18403793/pexels-photo-18403793/free-photo-of-moda-mano-calle-apple.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Funda de ejemplo" />
            <h3>Funda de Flores</h3>
            <p>$12.00</p>
            <button>Ver Detalles</button>
          </div>
        </div>
      </section>

      <section className="category-section">
        <h2>Categorías Populares</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>Fundas Transparentes</h3>
          </div>
          <div className="category-card">
            <h3>Fundas de Silicona</h3>
          </div>
          <div className="category-card">
            <h3>Fundas Personalizadas</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeView;
