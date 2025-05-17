'use client'

import React from 'react';

const NothingPopupContent: React.FC = () => {
  return (
    <div className="font-mono text-[#E6C9C9] flex flex-col justify-center items-center w-[350px] h-[200px] py-4">
      Sorry! Currently is nothing here:
      <p className='font-mono text-sm text-gray-600'>
        Send me a mail at: <a href="mailto:hungtm1417@gmail.com" className="text-blue-500 hover:underline">hungtm1417@gmail.com</a>
      </p>
    </div>
  );
};

export default NothingPopupContent; 