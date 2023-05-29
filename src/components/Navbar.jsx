
const menuItems = ['catálogo', 'pedido', 'contacto']

export const Navbar = () => {
  return (
    <nav className="w-full h-[140px] md:h-[90px] bg-white px-8 md:px-16  flex flex-col justify-center items-center md:flex-row md:justify-around md:gap-6">
        <div className="w-[74px] h-full flex justify-center items-center">
            <img src="./logo.svg" alt="Logo Unlimited Jerseys" />
        </div>
        <ul className="w-full md:w-auto flex gap-8 md:gap-20 justify-around items-center md:mt-12">
           {
            menuItems.map((item, index) => {
              return (
                    <li key={index} className="text-black text-sm font-bold my-2 md:m-0 hover:text-yellow transition-all ease-out delay-100">
                        <a href={`#${item.replace('á', 'a')}`}>{item.toUpperCase()}</a>
                    </li>
              )
            })
           }
        </ul>
        <div className="flex gap-4">
          <a className="hidden md:flex gap-2 items-center" href="https://www.instagram.com/unlimitedjerseys123/"><img width={28} src="./Instagram-black.svg" alt="https://www.instagram.com/unlimitedjerseys123/" /></a>
          <a className="hidden md:flex gap-2 items-center" href="https://www.instagram.com/unlimitedjerseys123/"><img width={28} src="./Whatsapp-black.svg" alt="https://www.instagram.com/unlimitedjerseys123/" /></a>
        </div>

    </nav>
  )
}
