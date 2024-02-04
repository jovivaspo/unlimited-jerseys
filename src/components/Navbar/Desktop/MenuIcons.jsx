import { Link } from 'react-router-dom';

const classLiIconst = 'w-[32px] h-[32px] rounded-[100%] p-1 hover:bg-[#F5F5F5] cursor-pointer m-0';

const classLinkItems = 'opacity-80 hover:opacity-100 transition-all';
export const MenuIcons = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-xs flex gap-2'>
        <Link to='/pedidos' className={`${classLinkItems}`}>
          Pedidos
        </Link>
        <Link to='/contacto' className={`${classLinkItems}`}>
          Conctacto
        </Link>
        <Link to='/publicaciones' className={`${classLinkItems}`}>
          Publicaciones
        </Link>
      </div>
      <ul className='flex gap-2'>
        <li className={`${classLiIconst}`}>
          <img className='w-full h-full object-cover' src='./Instagram-black.svg' alt='https://www.instagram.com/unlimitedjerseys123/' />
        </li>
        <li className={`${classLiIconst}`}>
          <img className='w-full h-full object-cover' src='./Whatsapp-black.svg' alt='whatsapp' />
        </li>
        <li className={`${classLiIconst}`}>
          <img className='w-full h-full object-cover' src='./Gmail-black.svg' alt='https://www.instagram.com/unlimitedjerseys123/' />
        </li>
      </ul>
    </div>
  );
};
