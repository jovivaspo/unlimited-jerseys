
export const Catalogo = ({ items }) => {
  return (
    <div id='catalogo' className="w-full">
        <h2 className="text-5xl font-bold text-center mt-24">CATÁLOGO DE PRODUCTOS</h2>
        <section className="my-16 p-5 mx-auto w-full  xl:w-[1280px] flex flex-wrap justify-center gap-16">
        {
            items.map((item, index) => {
              return (
                    <article key={index} className="bg-[#2E2E2E]  p-5 flex flex-col items-center justify-center max-w-[440px]">
                       <h3 className="text-2xl font-bold text-white text-center my-4 uppercase">{item.title}</h3>

                       <div className="relative w-[180px] flex justify-center my-4 rounded-xl"
                        >
                            <img src={item.image} alt={item.title} className="rounded-2xl opacity-75 md:hover:scale-110 md:hover:opacity-100 transform transition duration-500"/>
                        </div>
                        <h6 className="text-xl font-bold text-white text-center">{item.price}</h6>
                        <p className="text-xs text-white my-4 text-center">{item.description}</p>
                        <a target="_blank" href={item.link} className="my-4 px-4 py-2 flex justify-center border border-yellow text-yellow font-bold  hover:bg-yellow hover:text-black transition duration-200" rel="noreferrer">VER CATÁLOGO</a>

                    </article>
              )
            })
        }
         </section>
    </div>
  )
}
