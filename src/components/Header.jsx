import { CarouselHeader } from './CarouselHeader'

const images = [
  {
    src: ['./banner-principal.webp', './banner-principal-movil.webp'],
    alt: 'Banner Unlimited Jerseys'
  },
  {
    src: ['https://res.cloudinary.com/dkhppc0r9/image/upload/f_auto/v1685458325/banner-temporada-22-23_sjw8r6.jpg', 'https://res.cloudinary.com/dkhppc0r9/image/upload/v1685458325/banner-temporada-22-23-movil_thnhey.avif'],
    alt: 'Banner Temporada 22-23',
    link: 'https://drive.google.com/drive/folders/1aad16Inxs2QUvuZlBHKsKTrWwfvV4ybV'

  },
  {
    src: ['https://res.cloudinary.com/dkhppc0r9/image/upload/f_auto/v1685458325/banner-nueva-temporada_sg0zde.jpg', 'https://res.cloudinary.com/dkhppc0r9/image/upload/v1685458325/banner-nueva-temporada-movil_aw4an2.avif'],
    alt: 'Banner Nueva Temporada',
    link: 'https://drive.google.com/drive/folders/1AK-nO3sYuAd7B1FtXvI4riGh3Jie66KM'

  },
  {
    src: ['https://res.cloudinary.com/dkhppc0r9/image/upload/f_auto/v1685458325/banner-retro_ljodla.jpg', 'https://res.cloudinary.com/dkhppc0r9/image/upload/v1685458325/banner-retro-movil_ctkbdo.avif'],
    alt: 'Banner Retro',
    link: 'https://drive.google.com/drive/folders/1bCVvEoOnvQEqnCuyAZUOc-TIXbI6V6_0'

  },
  {
    src: ['https://res.cloudinary.com/dkhppc0r9/image/upload/f_auto/v1685458326/banner-nba_i76ykd.jpg', 'https://res.cloudinary.com/dkhppc0r9/image/upload/v1685458326/banner-nba-movil_j0ygpa.avif'],
    alt: 'Banner NBA',
    link: 'https://drive.google.com/drive/folders/1KFoNW_pI9jrB0FncckzrzYtHGTbfbIAM'

  }
]

export const Header = () => {
  return (
    <header className="w-full min-[600px]">
        <div className="w-full p-2 bg-yellow flex flex-col justify-center items-center">
            <p className="text-black  text-center  text-sm font-bold">Descuento en camisetas temporada 22-23</p>
        </div>
        <CarouselHeader items={images}/>
    </header>
  )
}
