import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import women from "../../images/sagwomen.jpg";
import sliderSecond from '../../images/sliderSecond.jpg'
import sliderThird from '../../images/sliderThird.jpg'

const Content = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div className="!flex p-12 overflow-hidden items-center gap-x-12">
          <div >
          <h1 className="mb-4 text-xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, maxime?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            veritatis at magnam quis eveniet! Minima alias sequi tenetur velit
            incidunt, nihil debitis nostrum in quidem et ullam! Cupiditate
            obcaecati ipsum neque consectetur, iure sunt voluptate temporibus
            consequatur ipsam reprehenderit doloribus asperiores sequi aperiam.
            Aliquid fuga expedita ipsa optio eaque quaerat?
          </p>
          </div>
          <img src={women} className="w-[590px] rounded-xl shadow-2xl" alt="" />
        </div>
        <div className="!flex p-12 overflow-hidden items-center gap-x-12">
          <div >
          <h1 className="mb-4 text-xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, maxime?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            veritatis at magnam quis eveniet! Minima alias sequi tenetur velit
            incidunt, nihil debitis nostrum in quidem et ullam! Cupiditate
            obcaecati ipsum neque consectetur, iure sunt voluptate temporibus
            consequatur ipsam reprehenderit doloribus asperiores sequi aperiam.
            Aliquid fuga expedita ipsa optio eaque quaerat?
          </p>
          </div>
          <img src={sliderSecond} className="w-[590px] rounded-xl shadow-2xl" alt="" />
        </div>
        <div className="!flex p-12 overflow-hidden items-center gap-x-12">
          <div >
          <h1 className="mb-4 text-xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, maxime?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            veritatis at magnam quis eveniet! Minima alias sequi tenetur velit
            incidunt, nihil debitis nostrum in quidem et ullam! Cupiditate
            obcaecati ipsum neque consectetur, iure sunt voluptate temporibus
            consequatur ipsam reprehenderit doloribus asperiores sequi aperiam.
            Aliquid fuga expedita ipsa optio eaque quaerat?
          </p>
          </div>
          <img src={sliderThird} className="w-[590px] rounded-xl shadow-2xl" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Content;
