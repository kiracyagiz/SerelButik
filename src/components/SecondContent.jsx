import React from 'react';
import sec3 from '../../images/sec3.png';

const SecondContent = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2 bg-gray-300 flex justify-center items-center">
        {/* Sol bölüm */}
      </div>
      <div className="w-1/2 bg-gray-800 flex justify-center items-center">
        {/* Sağ bölüm */}
      </div>
      <img src={sec3} alt="Sec 3" className="max-w-full max-h-full w-[300px] absolute z-10" />
    </div>
  );
};

export default SecondContent;
