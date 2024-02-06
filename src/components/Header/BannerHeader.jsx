import React from 'react';

export const BannerHeader = ({ message }) => {
  return (
    <div className='w-full p-4 bg-[#f5f5f5] flex flex-col justify-center items-center'>
      <p className='text-black text-center text-sm font-bold'>{message}</p>
    </div>
  );
};
