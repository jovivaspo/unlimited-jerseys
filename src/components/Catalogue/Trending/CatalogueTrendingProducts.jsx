import { useMemo } from 'react';
import { trendingProducts } from '../../../constants/catalogue/TrendingProducts';
import { ItemsProducts } from './ItemsProducts';

export const CatalogueTrendingProducts = () => {
  const trendingProductsOrdered = useMemo(() => {
    if (!trendingProducts.length) return [];

    //Ordenamos de menor a mayor en prioridad
    return trendingProducts.sort((a, b) => a.priority - b.priority);
  }, [trendingProducts]);

  return (
    <div className='w-[90%] flex flex-col gap-8 mx-auto'>
      <h2 className='text-5xl font-bold mt-24'>Más Vendidos</h2>
      <div className='flex gap-4 w-full mx-auto overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap  pb-4 catalogue-scrooll'>
        {trendingProductsOrdered.map((products, index) => {
          return <ItemsProducts key={index} description={products.description} front={products.front} back={products.back} />;
        })}
      </div>
    </div>
  );
};
