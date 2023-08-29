import Extra from './components/Extra';
import Navbar from './components/Navbar';
import Slider from './components/SliderComp';
import About from './components/About';
import selected1 from '../images/selected1.jpg'
import selected2 from '../images/selected2.jpg'
import selected3 from '../images/selected3.jpg'
import selected4 from '../images/selected4.jpg'
import ProductCard from './components/ProductCard';
import bikini1 from '../images/bikini1.jpg'
import Footer from './components/Footer';


const App = () => {
  
const products = [
  {
    title: 'Ürün 1',
    price: 100,
    rating: 4,
    imageSrc: bikini1,
  },
  {
    title: 'Ürün 2',
    price: 150,
    rating: 5,
    imageSrc: 'https://example.com/product2.jpg',
  },
  {
    title: 'Ürün 3',
    price: 200,
    rating: 3,
    imageSrc: 'https://example.com/product3.jpg',
  },
];

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
        <Extra />
        <About/>
        <div className='flex flex-col gap-y-8 md: md:flex-row  justify-center items-center'>
        <div className="w-[300px] md:w-[400px]  shadow-md overflow-hidden mx-8 md:mx-0   transform transition-transform hover:scale-110 ">
              <img
                src={selected2}
                className="w-full h-auto object-cover"
                alt=""
              />
          </div>
          <div className="w-[300px] md:w-[400px]  shadow-md overflow-hidden mx-8 md:mx-0 transform transition-transform hover:scale-110">
              <img
                src={selected1}
                className="w-full h-auto object-cover"
                alt=""
              />
          </div>
          <div className="w-[300px] md:w-[400px]  shadow-md overflow-hidden mx-8 md:mx-0 transform transition-transform hover:scale-110">
              <img
                src={selected3}
                className="w-full h-auto object-cover"
                alt=""
              />
          </div>
          <div className="w-[300px] md:w-[400px]  shadow-md overflow-hidden mx-8 md:mx-0 transform transition-transform hover:scale-110">
              <img
                src={selected4}
                className="w-full h-auto object-cover"
                alt=""
              />
          </div>
        </div>       
        <ProductCard/>
        <Footer/>
    
      </div>
    </>
  );
};

export default App;
