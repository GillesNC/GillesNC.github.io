import './App.css';
// IMPORT DES COMPONENTS
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';

// IMPORT DES PAGES
import Homepage from './pages/Homepage.jsx';

// IMPORT DES STYLES CSS
import "./index.css";
import "../src/css/header.css";
import "../src/css/footer.css";
import "../src/css/hero.css";
import "../src/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;