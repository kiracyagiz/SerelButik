import React from "react";
import women from '../../images/women.jpg'

const About = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 ">
            <div className="relative bg">
              <img
                src={women}
                alt="About Us"
                className="w-[300px] md:w-[400] rounded-lg shadow-md overflow-hidden mx-8 md:mx-36"
              />
              <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 mx-8 md:mx-36 rounded-tr-lg">
                Hakkımızda
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8 mr-0  md:mr-8 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-4">
              Hakkımızda
            </h2>
            <p className="text-gray-700 leading-relaxed">
              İç çamaşırı tutkunu bir grup tasarımcı olarak, amacımız hem
              rahatlığı hem de şıklığı bir araya getiren ürünler sunmaktır.
              Markamızın temel felsefesi, her bedende ve tarzda kişiye özel
              iç çamaşırları tasarlamaktır. En kaliteli kumaşları seçiyor ve
              en güncel modelleri sunuyoruz. Bizimle rahatlayın, kendinizi
              özel hissedin.
            </p>
            <p className="text-gray-700 mt-4">
              İç çamaşırları hakkında daha fazla bilgi almak veya bize
              ulaşmak için iletişim sayfamızı ziyaret edebilirsiniz.
            </p>
            <div className="mt-6">
              <a
                href="/iletisim"
                className="text-blue-500 hover:text-blue-600 font-semibold transition duration-300"
              >
                Bizimle iletişime geçin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
