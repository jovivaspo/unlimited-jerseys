import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const CarouselHeader = ({ items }) => {
  return (
    <Carousel autoPlay infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false} showArrows={true} interval={6000} transitionTime={2000}
    stopOnHover={false} swipeable={false}
    >
      {
        items.map((item, index) => {
          return (
            <div className="w-auto h-[800px] sm:h-auto mb-8 md:mb-24" key={index}>
                <img srcSet={`${item.src[1]} 640w, ${item.src[0]}`}
                  sizes="(max-width: 640px) 640px"
                 src={item.src[0]}
                 alt={item.alt}
                 className="w-full h-auto object-cover"/>
            </div>
          )
        })
      }
    </Carousel>
  )
}
