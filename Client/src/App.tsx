import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarComponent/NavbarComponent';
import Footer from './components/FooterComponent/FooterComponent';
import HomeView from './views/HomeView/HomeView';
import ProductList from './views/ProductListView/ProductListView';
import ProductDetails from './views/ProductDetailView/ProductDetail';
import Cart from './views/CartView/CartView';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
