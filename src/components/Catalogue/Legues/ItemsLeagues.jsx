import React from 'react';

export const ItemsLeagues = ({ path, name }) => {
  return (
    <div className='relative md:w-[480px] h-full bg-blue-300 inline-block mr-8 ml-2 rounded-md hover:scale-105 transition-all'>
      <div className='w-full h-full absolute top-0 left-0 bg-black opacity-60 hover:opacity-0 transition-all cursor-pointer rounded-md'></div>
      <img className='aspect-auto w-[520px] h-full object-cover rounded-md' src={path} alt={name} loading='lazy' />
      <div className='absolute bottom-[40px] right-[20px] px-6 py-2 rounded-full flex justify-center items-center bg-[#F5F5F5]'>
        <span className=' font-bold'>{name}</span>
      </div>
    </div>
  );
};
