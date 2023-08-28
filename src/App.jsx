import Extra from './components/Extra';
import Navbar from './components/Navbar';
import Slider from './components/SliderComp';
import About from './components/About';

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
