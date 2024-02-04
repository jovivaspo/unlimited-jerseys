import * as React from 'react';
const MenuIcon = ({ color, size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    stroke={color}
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={1.5}
    className='icon icon-tabler icon-tabler-menu-deep'
    viewBox='0 0 24 24'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M4 6h16M7 12h13M10 18h10' />
  </svg>
);
export default MenuIcon;
