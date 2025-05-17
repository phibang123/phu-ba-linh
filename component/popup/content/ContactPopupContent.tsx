'use client'

import React from 'react';
import Image from 'next/image';

const ContactPopupContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-[380px] py-4">
      <div className="relative mb-2">
        <div className="h-[120px] w-[120px] rounded-full bg-white flex items-center justify-center overflow-hidden">
          <Image
            src="/favicon-ico/icon.png"
            alt="Clover Jam"
            width={100}
            height={100}
            style={{
                filter: 'drop-shadow(0px 3.5px 3.5px #00000040)',
            }}
            className="rounded-full"
          />
        </div>
      </div>
      
      <h2 className="font-sans text-2xl font-semibold mb-1 text-[#8C7D7D]">Clover Jam</h2>
      <p className="font-sans text-lg mb-4 text-[#8C7D7D]">五木海翔</p>
      
      <div className="text-center mb-4 text-[#8C7D7D]">
        <p className="font-mono text-sm mb-1">
          Send me a mail at: <a href="mailto:hungtm1417@gmail.com" className="text-[#42ECE4] hover:underline">hungtm1417@gmail.com</a>
        </p>
        <p className="font-mono text-sm">or click the button below!</p>
      </div>
      
      <a 
        href="mailto:hungtm1417@gmail.com"
        style={{
            boxShadow: '0px 2.44px 2.44px 0px #00000040',
        }}
        className="font-mono text-sm px-6 py-2 bg-[#FDEFEF] rounded-[5px] hover:bg-[#F5DEDE] transition-colors text-[#8C7D7D] cursor-pointer"
      >
        Send me a mail
      </a>
    </div>
  );
};

export default ContactPopupContent; 