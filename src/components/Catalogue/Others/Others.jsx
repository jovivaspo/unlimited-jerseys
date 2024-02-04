import React from 'react';
import { Link } from 'react-router-dom';

const classLinks = 'font-bold text-xl semiTitle hover:underline';

export const Others = () => {
  return (
    <div className='w-[90%] flex flex-col gap-8 mx-auto'>
      <h2 className='text-5xl font-bold mt-24'>Otras Categorías</h2>
      <div className='flex gap-8 w-full h-[700px]'>
        <div className='w-1/2 h-full flex flex-col gap-4'>
          <img
            className='w-full h-full object-cover'
            src='https://res.cloudinary.com/dstkrmvvx/image/upload/f_auto/v1707043968/messi_az12t3.jpg'
            alt='Camisetas selecciones internacionales'
            loading='lazy'
          />
          <Link className={classLinks} to='/pedidos'>
            Selecciones
          </Link>
        </div>
        <div className='w-1/2 flex flex-col gap-4'>
          <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dstkrmvvx/image/upload/f_auto/v1707043840/cruif_rverfh.jpg' alt='Camisetas retro' loading='lazy' />
          <Link className={classLinks} to='/pedidos'>
            Camisetas Retro
          </Link>
        </div>
      </div>
    </div>
  );
};
