import * as React from 'react';
const IconHome = ({ size, color }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    stroke={color}
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={1.5}
    className='icon icon-tabler icon-tabler-home-2'
    viewBox='0 0 24 24'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7' />
    <path d='M10 12h4v4h-4z' />
  </svg>
);
export default IconHome;
