import { Link } from 'react-router-dom';
import { highlights } from '../../../constants/catalogue/Highlights';

export const CatalogueHighlights = () => {
  return (
    <div className='w-[90%] flex flex-col gap-8 mx-auto'>
      <h2 className='text-5xl font-bold mt-24'>Destacados</h2>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='grid gap-4 relative'>
          <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-black w-full bg-[#CDAE20] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[0].name}</span>
          <Link target='_blank' to={highlights[0].link}>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              loading='lazy'
              src={highlights[0].img}
              alt={highlights[0].name}
            />{' '}
          </Link>
          <Link target='_blank' to={highlights[1].link} className='relative'>
            <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-white w-full bg-[#203B4C] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[1].name}</span>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer '
              loading='lazy'
              src={highlights[1].img}
              alt={highlights[1].name}
            />
          </Link>
          <Link target='_blank' to={highlights[2].link} className='relative'>
            <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-white w-full bg-[#86CADE] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[2].name}</span>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              loading='lazy'
              src={highlights[2].img}
              alt={highlights[2].name}
            />
          </Link>
        </div>
        <div className='grid gap-4 relative'>
          <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-white w-full bg-[#861D1C] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[3].name}</span>{' '}
          <Link target='_blank' to={highlights[3].link}>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              loading='lazy'
              src={highlights[3].img}
              alt={highlights[3].name}
            />
          </Link>
          <Link target='_blank' to={highlights[4].link} className='relative'>
            <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-white w-full bg-[#D0A8BB] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[4].name}</span>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              loading='lazy'
              src={highlights[4].img}
              alt={highlights[4].name}
            />
          </Link>
          <Link target='_blank' to={highlights[5].link} className='relative'>
            <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-white w-full bg-[#A51A32] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[5].name}</span>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              loading='lazy'
              src={highlights[5].img}
              alt={highlights[5].name}
            />
          </Link>
        </div>
        <div className='grid gap-4 relative'>
          <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-white w-full bg-[#08213E] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[6].name}</span>
          <Link target='_blank' to={highlights[6].link}>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              loading='lazy'
              src={highlights[6].img}
              alt={highlights[6].name}
            />
          </Link>
          <Link target='_blank' to={highlights[7].link} className='relative'>
            <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-white w-full bg-[#802927] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[7].name}</span>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              loading='lazy'
              src={highlights[7].img}
              alt={highlights[7].name}
            />
          </Link>
          <Link target='_blank' to={highlights[8].link} className='relative'>
            <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-black w-full bg-[#9B2226] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[8].name}</span>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              loading='lazy'
              src={highlights[8].img}
              alt={highlights[8].name}
            />
          </Link>
        </div>
        <div className='relative grid gap-4'>
          <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-black w-full bg-[#E0C836] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[9].name}</span>
          <Link target='_blank' to={highlights[9].link}>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              src={highlights[9].img}
              alt={highlights[9].name}
              loading='lazy'
            />
          </Link>
          <Link target='_blank' to={highlights[10].link} className='relative'>
            <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-white w-full bg-[#B12D30] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[10].name}</span>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              src={highlights[10].img}
              alt={highlights[10].name}
              loading='lazy'
            />
          </Link>
          <Link target='_blank' to={highlights[11].link} className='relative'>
            <span className='absolute top-0 left-0 text-lg md:text-2xl semiTitle font-bold text-white w-full bg-[#3E51C7] rounded-t-lg p-1 lg:p-2 z-40'>{highlights[11].name}</span>
            <img
              className='h-auto max-w-full rounded-lg lg:opacity-90 hover:opacity-100 transform transition duration-500 cursor-pointer'
              src={highlights[11].img}
              alt={highlights[11].name}
              loading='lazy'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
