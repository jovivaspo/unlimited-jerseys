import * as React from 'react';
const IconClose = ({ size, color }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill='none'
    stroke={color}
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={1.5}
    className='icon icon-tabler icon-tabler-x'
    viewBox='0 0 24 24'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M18 6 6 18M6 6l12 12' />
  </svg>
);
export default IconClose;
