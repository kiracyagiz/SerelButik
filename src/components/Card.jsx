import React from 'react';

const Card = ({ cards }) => {
  return (
    <div className=' flex gap-x-16'>
      {cards.map((dt) => (
        <div key={dt.id} className='relative hover:scale-105 hover:transition-transform items-center text-center'>
          <img src={dt.image} className='sm:w-[400px] md:w-[220px] rounded-lg shadow-xl' alt="" />
          <p className='my-4'>{dt.name}</p>
          <button className='bg-yellow-800 text-white px-4 rounded py-1 hover:text-pink-400 shadow-2xl  hover:bg-white'>SATIN AL</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
