import React from "react";

const Card = ({bikini}) => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden mx-4 my-6 p-4  sm:w-72 md:w-80 lg:w-96 transition-transform transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={bikini}
          alt="Product"
          className="w-full h-44 object-cover"
        />
        <div className="absolute top-0 left-0 bg-blue-500 text-white px-2 py-1 rounded-tr-lg">
          Yeni
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Ürün Adı</h2>
        <p className="text-gray-600">Fiyat</p>
      </div>
    </div>
  );
};

export default Card;
