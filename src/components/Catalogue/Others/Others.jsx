import React from 'react';
import { Link } from 'react-router-dom';

const classLinks = 'font-bold text-2xl md:text-xl semiTitle hover:underline';

export const Others = () => {
  return (
    <div className='w-[90%] flex flex-col gap-8 mx-auto'>
      <h2 className='text-5xl font-bold mt-24'>Otras Categorías</h2>
      <div className='flex flex-col md:flex-row gap-24 md:gap-8 w-full '>
        <div className='w-full md:w-1/2 flex flex-col gap-4 h-[700px]'>
          <img
            className='w-full h-full object-cover'
            src='https://res.cloudinary.com/dstkrmvvx/image/upload/f_auto/v1707043968/messi_az12t3.jpg'
            alt='Camisetas selecciones internacionales'
            loading='lazy'
          />
          <Link className={classLinks} to='https://drive.google.com/drive/u/0/folders/1Seu8p4wPDcdWrH2L2TNKwtiZBmuTdkRE?direction=a'>
            Selecciones
          </Link>
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-4 h-[700px]'>
          <img className='w-full h-full object-cover' src='https://res.cloudinary.com/dstkrmvvx/image/upload/f_auto/v1707043840/cruif_rverfh.jpg' alt='Camisetas retro' loading='lazy' />
          <Link className={classLinks} to='https://drive.google.com/drive/u/0/folders/1lGfT4fGqCV54PqMk73Y34nCO2EkeGtJV?direction=a'>
            Camisetas Retro
          </Link>
        </div>
      </div>
    </div>
  );
};
