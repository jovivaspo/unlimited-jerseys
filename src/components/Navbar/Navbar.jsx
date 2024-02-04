import { Logo } from './Logo';
import { Menu } from './Menu';
import { MenuIcons } from './MenuIcons';

export const Navbar = () => {
  return (
    <nav className='w-full h-[140px] md:h-[90px] bg-white px-8 md:px-16  flex flex-col justify-center items-center md:flex-row md:justify-around md:gap-6 border-b'>
      <div className='w-full flex justify-between items-center'>
        <Logo />

        <Menu />

        <MenuIcons />
      </div>
    </nav>
  );
};
