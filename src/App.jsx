import Card from './components/Card';
import Extra from './components/Extra';
import Navbar from './components/Navbar';
import Slider from './components/SliderComp';
import bikini from '../images/bikini1.jpg'
import About from './components/About';
import BestSellers from './components/BestSellers';

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <div className='h- overflow-hidden'>
        <Navbar/>
        <Slider/>
        <Extra/>
        <About/>       
    
      </div>
    </>
  );
};

export default App;
