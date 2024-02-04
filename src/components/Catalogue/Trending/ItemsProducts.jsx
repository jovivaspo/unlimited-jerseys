import React, { useEffect, useRef } from 'react';

export const ItemsProducts = ({ description, front, back }) => {
  const refImg = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (!refImg?.current || mediaQuery.matches) return;

    const mouseHover = () => {
      const $frontImg = refImg.current.querySelector('.front');

      if (!$frontImg) return;
      $frontImg.style.opacity = '0';
    };

    const mouseLeave = () => {
      const $frontImg = refImg.current.querySelector('.front');
      if (!$frontImg) return;
      $frontImg.style.opacity = '100';
    };

    refImg.current.addEventListener('mouseover', mouseHover);
    refImg.current.addEventListener('mouseleave', mouseLeave);

    return () => {
      if (!refImg?.current) return;
      refImg.current.removeEventListener('mouseover', mouseHover);
      refImg.current.removeEventListener('mouseleave', mouseLeave);
    };
  }, [refImg?.current]);

  return (
    <div className='w-[278px] h-[340px] flex flex-col gap-1'>
      <div className='w-[278px] h-[300px] relative' ref={refImg}>
        <img src={front} alt={description} loading='lazy' className='front absolute z-10 top-0 left-0 w-full h-full object-cover transition-opacity' />
        <img src={back} alt={description} loading='lazy' className='back absolute top-0 right-0 w-full h-full object-cover' />
      </div>
      <div className='w-[278px] overflow-hidden h-[40px]'>
        <p className='text-sm whitespace-normal'>{description}</p>
      </div>
    </div>
  );
};
