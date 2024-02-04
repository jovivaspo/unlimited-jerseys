import { useAutoAnimate } from '@formkit/auto-animate/react';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { menu } from '../../../constants/structure/menu/menu';
import IconClose from '../../Icons/IconClose';
import IconHome from '../../Icons/IconHome';
import MenuIcon from '../../Icons/IconMenu';
import { Logo } from '../Logo';

const otherLinks = [
  {
    name: 'Contacto',
    link: '/contacto',
  },

  {
    name: 'Pedidos',
    link: '/pedidos',
  },
  {
    name: 'Publicaciones',
    link: '/posts',
  },
];

const classLiIconst = 'w-[42px] h-[42px] rounded-[100%] p-1 hover:bg-[#F5F5F5] cursor-pointer m-0';

export const NavbarMb = () => {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(null);
  const menuRef = useRef(null);

  const [parent, enableAnimations] = useAutoAnimate();
  const navigate = useNavigate();

  const onClickMenu = (link) => {
    if (!menuRef.current) return;
    const $body = document.querySelector('body');

    if (!$body) return;

    if (menuRef.current.classList.contains('menu-open')) {
      menuRef.current.classList.remove('menu-open');
      menuRef.current.classList.add('menu-close');
      $body.classList.remove('overflow-hidden');
      $body.classList.add('overflow-auto');
    } else {
      menuRef.current.classList.remove('menu-close');
      menuRef.current.classList.add('menu-open');
      $body.classList.add('overflow-hidden');
      $body.classList.remove('overflow-auto');
    }
    if (link) {
      navigate(link);
    }
    setSubMenuIsOpen(null);
  };

  const handlerSubmenu = (name) => {
    if (subMenuIsOpen === name) {
      setSubMenuIsOpen(null);
    } else {
      setSubMenuIsOpen(name);
    }
  };

  return (
    <nav className='h-[80px] w-full flex justify-between items-center md:hidden p-4'>
      <Logo size='64px' />
      <button onClick={onClickMenu}>
        <MenuIcon size={34} color='#000' />
      </button>
      <div ref={menuRef} className='menu-close w-full h-screen absolute top-0 left-0 bg-white z-50 transition-transform duration-200 ease-out flex flex-col'>
        <div className='w-full h-[80px] flex justify-between items-center p-4'>
          <button
            onClick={() => {
              onClickMenu('/');
            }}
          >
            <IconHome size='34px' color='#000' />
          </button>
          <button onClick={onClickMenu}>
            <IconClose size='34px' color='#000' />
          </button>
        </div>

        <div className='w-full flex flex-col px-4 font-bold'>
          {menu.map((itemMenu) => {
            return (
              <div key={itemMenu.name} className='cursor-pointer w-full border-b' onClick={() => handlerSubmenu(itemMenu.name)} ref={parent}>
                <span className='w-full p-4 flex items-center semiTitle text-3xl'> {itemMenu.name}</span>
                {subMenuIsOpen === itemMenu.name && (
                  <ul className='w-full flex flex-col px-4 pb-4 gap-4 animate-fade-down'>
                    {itemMenu?.items?.map((el) => {
                      return <li className='m-0 semiTitle px-2'>{el.name?.toUpperCase()}</li>;
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className=' w-full flex flex-col gap-10 p-4 semiTitle mt-auto mb-8'>
          {otherLinks.map((item) => {
            return (
              <span
                key={item.name}
                className='text-2xl'
                onClick={() => {
                  onClickMenu(item.link);
                }}
              >
                {item.name}
              </span>
            );
          })}
          <ul className='h-[60px] w-full flex gap-2 justify-between items-center p-4 mt-auto border-t'>
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
      </div>
    </nav>
  );
};
