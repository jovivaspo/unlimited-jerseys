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
            <div className="w-full h-[700px] bg-yellow mb-8  sm:h-auto sm:min-h-[280px] md:min-h-[336px] md:mb-24 lg:min-h-[450px] xl:min-h-[568px] 2xl:min-h-[760px]" key={index}>
              {
                item.link

                  ? (<a className='w-full h-full block' href={item.link} target='_blank' rel="noreferrer">
                <img srcSet={`${item.src[1]} 640w, ${item.src[0]}`}
                 sizes="(max-width: 640px) 640px"
                 src={item.src[0]}
                 alt={item.alt}
                 className="w-full h-auto object-cover"/>
              </a>)
                  : (<img srcSet={`${item.src[1]} 640w, ${item.src[0]}`}
                 sizes="(max-width: 640px) 640px"
                 src={item.src[0]}
                 alt={item.alt}
                 className="w-full h-auto object-cover"/>)
              }

            </div>
          )
        })
      }
    </Carousel>
  )
}
