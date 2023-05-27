import { CarouselHeader } from './CarouselHeader'

const images = [
  {
    src: './banner-principal.jpg',
    alt: 'Banner Unlimited Jerseys'
  },
  {
    src: './banner-temporada-22-23.jpg',
    alt: 'Banner Temporada 22-23'
  },
  {
    src: './banner-nueva-temporada.jpg',
    alt: 'Banner Nueva Temporada'
  },
  {
    src: './banner-retro.jpg',
    alt: 'Banner Retro'
  },
  {
    src: './banner-nba.jpg',
    alt: 'Banner NBA'
  }
]

export const Header = () => {
  return (
    <header className="w-full">
        <div className="w-full p-2 bg-black flex justify-center items-center">
            <p className="text-white  text-center  text-xs">Descuento en camistas temporada 22-23</p>
        </div>
        <CarouselHeader items={images}/>
    </header>
  )
}
