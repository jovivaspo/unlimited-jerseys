export const Footer = () => {
  return (
    <footer className='bg-[#2E2E2E] border-t border-[#ccc] w-full h-auto '>
      <ul className='text-sm text-[#ccc] flex flex-col  md:flex-row justify-around items-center'>
        <li className='flex gap-2 items-center '>
          <img src='./Gmail.svg' alt='https://www.instagram.com/unlimitedjerseys123/' />
          contact.unlimitedjerseys@gmail.com
        </li>
        <li>
          <a className='flex gap-2 items-center ' href='https://www.instagram.com/unlimitedjerseys123/'>
            <img src='./Instagram.svg' alt='https://www.instagram.com/unlimitedjerseys123/' />
            @unlimitedjerseys123
          </a>
        </li>
        <li>
          <a className='flex gap-2 items-center ' href='https://wa.me/722452544'>
            <img src='./Whatsapp.svg' alt='whatsapp' />
            +34 722 45 25 44
          </a>
        </li>
      </ul>
    </footer>
  );
};
