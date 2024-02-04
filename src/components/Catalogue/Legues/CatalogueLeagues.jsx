import { leagues } from '../../../constants/catalogue/Leagues';
import { ItemsLeagues } from './ItemsLeagues';

export const CatalogueLeagues = () => {
  return (
    <div className='w-[90%] flex flex-col gap-8 mx-auto'>
      <h2 className='text-5xl font-bold mt-24'>Ligas</h2>
      <div className='w-full mx-auto overflow-x-auto overflow-y-hidden scroll-smooth h-[380px] whitespace-nowrap  pb-4 catalogue-scrooll'>
        {leagues.map((league) => {
          return <ItemsLeagues key={league.name} path={league.img} name={league.name} link={league.link} />;
        })}
      </div>
    </div>
  );
};
