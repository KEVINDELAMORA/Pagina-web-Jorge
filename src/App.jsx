import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Brand from './components/Brand';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Brand />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
