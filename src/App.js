import './App.css';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Header/Header';
import Programs from './components/Programs/Programs'
import { Reasons } from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import { Testimonials } from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer'
import Join from './components/Join/Join';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
