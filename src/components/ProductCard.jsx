import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bikini1 from "../../images/bikini2.png";
import bikini2 from "../../images/bikini3.png";
import bikini3 from "../../images/bikini4.png";
import bikini5 from "../../images/bikini5.jpg";
import bikini6 from "../../images/bikini6.jpg";

const ProductCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const products = [
    {
      name: "Lâl Mavi",
      image: bikini1,
    },
    {
      name: ' Lâl Siyah',
      image: bikini2,
    },
    {
      name: 'Lâl Kırmızı',
      image: bikini3
    },
    {
      name: 'Lâl Sarı',
      image: bikini5,
    },
    {
      name: 'Bikiniii',
      image: bikini6
    }
  ];

  return (
    <div className="ml-0 mt-12  md:ml-28">
      <Carousel
        responsive={responsive}
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
        {
          products.map((dt,i) => (
            <div key={i} className="cursor-pointer p-4 items-center w-fit shadow-2xl mb-12">
              <p className="text-center py-2 bg-blue-400 my-4 text-white ">{dt.name}</p>
              <img src={dt.image} alt="" className="w-72 object-cover mb-12  h-auto" />
              <div className="justify-center items-center text-center">
              <button  className="bg-blue-400 py-2 w-full rounded text-white">Satın Al</button>

              </div>
            </div>
          ))
        }
      
      </Carousel>
      ;
    </div>
  );
};

export default ProductCard;
