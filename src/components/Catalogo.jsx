
export const Catalogo = ({ items }) => {
  return (
    <div id='catalogo' className="w-full" style={{
      background: ' linear-gradient(0deg, rgba(36,36,36,1) 0%, rgba(0,0,0,1) 50%, rgba(36,36,36,1) 100%)'
    }}>
        <h2 className="text-5xl font-bold text-center mt-24 lg:mt-32">CATÁLOGO DE PRODUCTOS</h2>
        {
            items.map((item, index) => {
              return (
                    <section key={index} className="my-8 p-5  mx-auto flex flex-col items-center md:flex-row md:gap-4 md:justify-around xl:w-[1280px] lg:mt-32">
                        <div className="w-[320px] flex flex-col justify-around items-center md:w-[440px] md:gap-8 lg:w-[600px] lg:gap-10">
                            <h3 className="text-3xl font-bold text-yellow text-center my-4 uppercase">{item.title}</h3>
                            <h6 className="text-lg my-4">{item.description}</h6>
                            <a target="_blank" href={item.link} className="my-4 w-[120px] px-4 py-2 flex justify-center border border-yellow text-yellow font-bold rounded-2xl hover:bg-yellow hover:text-black transition duration-200" rel="noreferrer">Ver</a>
                        </div>
                        <div className="relative w-[280px] flex justify-center my-4 rounded-xl md:w-[360px]"
                        >
                            <img src={item.image} alt={item.title} className="rounded-2xl opacity-75 md:hover:scale-110 md:hover:opacity-100 transform transition duration-500"/>
                        </div>
                    </section>
              )
            })
        }
    </div>
  )
}
