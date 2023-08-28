import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bikini1 from '../../images/bikini2.png'
import bikini2 from '../../images/bikini3.png'
import bikini3 from '../../images/bikini4.png'
import bikini5 from '../../images/bikini5.jpg'
import bikini6 from '../../images/bikini6.jpg'


const ProductCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="ml-0 mt-12  md:ml-20">
     <Carousel responsive={responsive}
     
     
     swipeable={true}
     draggable={false}
     showDots={true}
     ssr={true} // means to render carousel on server-side.
     infinite={true}
     autoPlaySpeed={1000}
     keyBoardControl={true}
     customTransition="all .5"
     transitionDuration={500}
     containerClass="carousel-container"
     removeArrowOnDeviceType={["tablet", "mobile"]}
     dotListClass="custom-dot-list-style"
     itemClass="carousel-item-padding-40-px"
     >
  <div className='cursor-pointer p-4 items-center '>
    Item 1
    <img src={bikini1} className='w-72 object-cover mb-12  h-auto' alt="" />
    </div>
  <div className='cursor-pointer p-4  items-center'>
    Item 2
    <img src={bikini2} className='w-72 object-cover mb-12 ' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 3
    <img src={bikini3} className='w-72 object-cover mb-12 h-auto' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 4
    <img src={bikini5} className='w-72 object-cover mb-12 h-72 md:h-96 ' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 4
    <img src={bikini6} className='w-72 object-cover mb-12 h-72 md:h-96' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 4
    <img src={bikini1} className='w-72 object-cover mb-12 h-auto' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 4
    <img src={bikini1} className='w-72 object-cover mb-12 h-auto' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 4
    <img src={bikini1} className='w-72 object-cover mb-12 h-auto' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 4
    <img src={bikini1} className='w-72 object-cover mb-12 h-auto' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 
    <img src={bikini1} className='w-72 object-cover mb-12 h-auto' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 
    <img src={bikini1} className='w-72 object-cover mb-12 h-auto' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 4
    <img src={bikini1} className='w-72 object-cover mb-12 h-auto' alt="" />
    </div>
  <div className='cursor-pointer p-4 items-center'>
    Item 4
    <img src={bikini1} className='w-72 object-cover mb-12 h-auto' alt="" />
    </div>
</Carousel>;
    </div>
  );
};

export default ProductCard;
