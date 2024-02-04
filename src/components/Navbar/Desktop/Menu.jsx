import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { menu } from '../../../constants/structure/menu/menu';

export const Menu = () => {
  const [itemIsHover, setItemIsHover] = useState('');
  const [menuHover, setMenuHover] = useState(false);

  const handlerShowSubMenu = (item) => {
    setItemIsHover(item);
    setMenuHover(true);
  };

  const handlerCloseMenu = () => {
    setMenuHover(false);
    setItemIsHover('');
  };

  const menuIndexado = useMemo(() => {
    if (menu.length === 0) return {};
    return menu.reduce((acc, item) => {
      acc[item?.name] = item;
      return acc;
    }, {});
  }, []);

  return (
    <>
      <div onMouseLeave={handlerCloseMenu} className='h-[60px] flex justify-center items-center'>
        <ul className='flex min-w-[300px] h-[46px] justify-center items-center'>
          {menu.map((item) => (
            <li
              key={item.name}
              className='relative w-full h-full flex-1 m-0 text-center flex items-center justify-center'
              style={{
                borderBottom: itemIsHover === item.name ? '2px solid #000' : '',
              }}
              onMouseEnter={() => handlerShowSubMenu(item.name)}
            >
              <a href='' className='font-bold text-lg w-full h-full flex justify-center items-center'>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {itemIsHover && menuHover && (
          <div className='w-screen bg-white absolute top-[68px] h-[340px] left-0 z-40 flex justify-around py-8'>
            {menuIndexado[itemIsHover]?.items?.map((item) => (
              <div className='flex flex-col justify-start items-start'>
                <a className='font-bold text-sm mb-2 cursor-pointer hover:scale-110 transition-all'>{item.name}</a>
                <ul className='max-h-[300px] flex flex-col justify-around items-start h-full flex-wrap py-2'>
                  {item?.items?.map((item) => (
                    <li className='m-0 pr-10 my-2'>
                      <Link to={item.link} className='text-xs font-bold opacity-70 hover:opacity-100 hover:scale-110 transition-all cursor-pointer flex items-center gap-1'>
                        {item.img && <img loading='lazy' className='w-5 h-5 object-cover rounded-[100%]' src={item.img} alt={item.name} />}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
