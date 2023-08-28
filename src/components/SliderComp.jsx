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
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const slides = [
    {
      image: women,
      bgColor: "bg-pink-200",
      title: "Özel İlk Slayt Başlığı",
      content: "Slayt içeriği burada.",
    },
    {
      image: womensec,
      bgColor: "bg-blue-200",
      title: "Özel İkinci Slayt Başlığı",
      content: "Slayt içeriği burada.",
    },
    {
      image: womenthird,
      bgColor: "bg-purple-200",
      title: "Özel Üçüncü Slayt Başlığı",
      content: "Slayt içeriği burada.",
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`!flex flex-col gap-y-8 justify-center gap-x-16 md:flex-row p-12 w-[80vh] h-[70vh] ${slide.bgColor}`}
          >
            <div className="w-[300px] md:w-[500px] rounded-lg shadow-md overflow-hidden mx-8 md:mx-0">
              <img
                src={slide.image}
                className="w-full h-auto object-cover"
                alt=""
              />
            </div>
            <div className="md:max-w-md">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                {slide.title}
              </h1>
              <p className="text-sm md:text-base mb-6">{slide.content}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
