import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div class='h-screen w-full flex flex-col justify-center items-center ]'>
      {' '}
      <h1 class='text-9xl font-extrabold text-black tracking-widest'>404</h1>
      <div class='bg-yellow px-2 text-sm rounded rotate-12 absolute'>Page Not Found</div>
      <button class='mt-5'>
        <a class='relative inline-block text-sm font-medium text-yellow group active:text-yellow focus:outline-none focus:ring'>
          <span class='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-yellow group-hover:translate-y-0 group-hover:translate-x-0'></span>

          <span class='relative block px-8 py-3 bg-black  border border-current'>
            <Link to='/'>Go Home</Link>
          </span>
        </a>
      </button>
    </div>
  );
};
