import { useLocationPage } from '../../hooks/useLocationPage.hook';
import { BannerHeader } from './BannerHeader';
import { CarouselHeader } from './CarouselHeader';
import { HeroHeader } from './HeroHeader';

const images = [
  {
    src: ['./banner-principal.webp', './banner-principal-movil.webp'],
    alt: 'Banner Unlimited Jerseys',
  },
  {
    src: [
      'https://res.cloudinary.com/dstkrmvvx/image/upload/v1701601446/Headers/Retro_hero_pvj5eq.jpg',
      'https://res.cloudinary.com/dkhppc0r9/image/upload/v1696182894/banner-temporada-22-23-movil_rrdvlb.avif',
    ],
    alt: 'Camisetas Retro Unlimited Jerseys',
    link: 'https://drive.google.com/drive/u/0/folders/1lGfT4fGqCV54PqMk73Y34nCO2EkeGtJV?direction=a',
  },
  {
    src: ['https://res.cloudinary.com/dkhppc0r9/image/upload/v1696180676/NBA_hero_hi1xhk.jpg', 'https://res.cloudinary.com/dkhppc0r9/image/upload/v1696182894/banner-nba-movil_aoyabp.avif'],
    alt: 'Banner NBA Unlimited Jerseys',
    link: 'https://drive.google.com/drive/u/0/folders/1KScSvXV4LDT7rqw87QQZAlR4BTvyvhoK?direction=a',
  },
];

export const Header = () => {
  const { showHeader } = useLocationPage();
  return (
    <header className='w-full' style={{ display: showHeader ? 'block' : 'none' }}>
      <BannerHeader message='Descuento en todas las camisetas 22-23' />
      <CarouselHeader items={images} />
      <HeroHeader item={images[0]} index={0} />
    </header>
  );
};
