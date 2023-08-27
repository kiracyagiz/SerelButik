import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import women from "../../images/sagwomen.jpg";

const Navbar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640); // Set the breakpoint width as per your needs
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div>
        <div
          className={`h-[80vh] ${isSmallScreen ? "" : "bg-[url(../../images/womens.jpg)] bg-cover bg-center"}`}
        >
          <div className="flex items-center justify-center gap-x-8">
            <p>Anasayfa</p>
            <p>Hakkımızda</p>
            <img src={logo} className="w-[150px]" alt="" />
            <p>Ürünlerimiz</p>
            <p>İletişim</p>
          </div>
        </div>
        <div className="overflow-hidden  absolute  right-0 left-0 bottom-32 w-[600px] m-auto">
          <Slider {...settings}>
          <div className="p-12 flex justify-center items-center">
              <div className="bg- rounded-xl bg-gray-200 shadow-2xl flex gap-x-12  p-8">
                <div >
                  <h1 className="text-lg text-md text-bold font-custom">Lorem ipsum dolor sit.</h1>
                  <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quod?</p>
                </div>
                
                <div>
                <img src={women} className="w-[200px] rounded-xl" alt="" />
                </div>
              </div>
            </div>
            <div className="p-12 flex justify-center items-center">
              <div className="bg- rounded-xl bg-gray-200 shadow-2xl flex gap-x-12  p-8">
                <div >
                  <h1 className="text-lg text-md text-bold font-custom">Lorem ipsum dolor sit.</h1>
                  <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quod?</p>
                </div>
                
                <div>
                <img src={women} className="w-[200px] rounded-xl" alt="" />
                </div>
              </div>
            </div>
            <div className="p-12 flex justify-center items-center">
              <div className="bg- rounded-xl bg-gray-200 shadow-2xl flex gap-x-12  p-8">
                <div >
                  <h1 className="text-lg text-md text-bold font-custom">Lorem ipsum dolor sit.</h1>
                  <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quod?</p>
                </div>
                
                <div>
                <img src={women} className="w-[200px] rounded-xl" alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Navbar;
