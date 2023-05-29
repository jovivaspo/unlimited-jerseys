import { CarouselHeader } from './CarouselHeader'

const images = [
  {
    src: ['./banner-principal.jpg', './banner-principal-movil.jpg'],
    alt: 'Banner Unlimited Jerseys'
  },
  {
    src: ['./banner-temporada-22-23.jpg', './banner-temporada-22-23-movil.jpg'],
    alt: 'Banner Temporada 22-23'
  },
  {
    src: ['./banner-nueva-temporada.jpg', './banner-nueva-temporada-movil.jpg'],
    alt: 'Banner Nueva Temporada'
  },
  {
    src: ['./banner-retro.jpg', './banner-retro-movil.jpg'],
    alt: 'Banner Retro'
  },
  {
    src: ['./banner-nba.jpg', './banner-nba-movil.jpg'],
    alt: 'Banner NBA'
  }
]

export const Header = () => {
  return (
    <header className="w-full">
        <div className="w-full p-2 bg-yellow flex flex-col justify-center items-center">
            <p className="text-black  text-center  text-sm font-bold">Descuento en camisetas temporada 22-23</p>
        </div>
        <CarouselHeader items={images}/>
    </header>
  )
}
