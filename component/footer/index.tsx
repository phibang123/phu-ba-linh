import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center fixed bottom-0 w-full mb-4'>
        <p className='!font-mono text-xl font-medium text-[#8C7D7D]'>© Clover Jam - 2025</p>
        <div className='h-[8px] w-[400px] rounded-[8.63px] border-2 border-[#FDEFEF] mt-2' style={{backgroundColor: '#8C7D7D'}}></div>
    </div>
  )
}

export default Footer