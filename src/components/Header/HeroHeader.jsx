import React from 'react';

export const HeroHeader = ({ item, index }) => {
  return (
    <div className='block md:hidden w-full h-[700px] bg-transparent mb-8  sm:h-auto sm:min-h-[280px] md:min-h-[336px] md:mb-24 lg:min-h-[450px] xl:min-h-[568px] 2xl:max-h-[700px]' key={index}>
      {item.link ? (
        <a className='w-full h-full block' href={item.link} target='_blank' rel='noreferrer'>
          <img srcSet={`${item.src[1]} 640w, ${item.src[0]}`} sizes='(max-width: 640px) 640px' src={item.src[0]} alt={item.alt} className='w-full h-auto object-cover' />
        </a>
      ) : (
        <img srcSet={`${item.src[1]} 640w, ${item.src[0]}`} sizes='(max-width: 640px) 640px' src={item.src[0]} alt={item.alt} className='w-full h-auto object-cover' />
      )}
    </div>
  );
};
