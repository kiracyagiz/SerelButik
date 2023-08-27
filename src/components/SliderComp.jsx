import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import women from "../../images/sec.png";
import womensec from '../../images/sec3.png'
import womenthird from '../../images/sec2.png'


const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex flex-col md:flex-row justify-between   p-12 bg-pink-200 w-[80vh]">
          <div className="!flex flex-col gap-y-8 p-12 mt-0 md:mt-20">
            <h1 className="text-4xl ">Lorem ipsum dolor sit amet.</h1>
            <p className="max-w-sm md:max-w-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              sint laudantium minus corrupti consequatur, delectus amet quia
              sapiente porro ipsam quo obcaecati quos ad rerum voluptatum
              molestias eum quam perferendis voluptates consectetur placeat
              nesciunt saepe necessitatibus ullam. Incidunt libero consequuntur
              commodi similique esse ipsum voluptas, repudiandae numquam beatae
              fugit minima?
            </p>
          </div>
          <img src={women} className="ml-20 md:ml-0 w-[150px] md:w-[300px] object-cover mr-0 md:mr-20 " alt="" />
        </div>
        <div className="!flex flex-col md:flex-row justify-between  p-12 bg-blue-200 w-[80vh]">
          <div className="!flex flex-col gap-y-8 p-12 mt-0 md:mt-20">
            <h1 className="text-4xl ">Lorem ipsum dolor sit amet.</h1>
            <p className="max-w-sm md:max-w-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              sint laudantium minus corrupti consequatur, delectus amet quia
              sapiente porro ipsam quo obcaecati quos ad rerum voluptatum
              molestias eum quam perferendis voluptates consectetur placeat
              nesciunt saepe necessitatibus ullam. Incidunt libero consequuntur
              commodi similique esse ipsum voluptas, repudiandae numquam beatae
              fugit minima?
            </p>
          </div>
          <img src={womensec} className="ml-20 md:ml-0 w-[150px] md:w-[300px] object-cover mr-0 md:mr-20 " alt="" />
        </div>
        <div className="!flex flex-col md:flex-row justify-between  p-12 bg-purple-200 w-[80vh]">
          <div className="!flex flex-col gap-y-8 p-12 mt-0 md:mt-20">
            <h1 className="text-4xl ">Lorem ipsum dolor sit amet.</h1>
            <p className="max-w-sm md:max-w-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              sint laudantium minus corrupti consequatur, delectus amet quia
              sapiente porro ipsam quo obcaecati quos ad rerum voluptatum
              molestias eum quam perferendis voluptates consectetur placeat
              nesciunt saepe necessitatibus ullam. Incidunt libero consequuntur
              commodi similique esse ipsum voluptas, repudiandae numquam beatae
              fugit minima?
            </p>
          </div>
          <img src={womenthird} className="ml-20 md:ml-0 w-[150px] md:w-[300px] object-cover mr-0 md:mr-20 " alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
