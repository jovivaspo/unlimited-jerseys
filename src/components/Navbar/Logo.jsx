import React from 'react';

export const Logo = ({ size = '80px' }) => {
  return (
    <div style={{ width: size, height: size }} className=' cursor-pointer'>
      <a
        href='/
          '
      >
        {' '}
        <img className='w-full h-full object-cover' src='/Logo.png' alt='logo' />
      </a>
    </div>
  );
};
