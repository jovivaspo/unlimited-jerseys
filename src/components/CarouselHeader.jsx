import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const CarouselHeader = ({ items }) => {
  return (
    <Carousel autoPlay infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false} showArrows={false} interval={4000} transitionTime={2000}
    stopOnHover={false} swipeable={false}
    >
      {
        items.map((item, index) => {
          return (
            <div className="w-full h-auto 2xl:h-[620px]" key={index}>
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover"/>
            </div>
          )
        })
      }
    </Carousel>
  )
}
