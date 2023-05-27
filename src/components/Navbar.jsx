
const menuItems = ['catálogo', 'pedido', 'contacto']

export const Navbar = () => {
  return (
    <nav className="w-full h-32 md:h-20 bg-black px-16 sticky top-0 z-50 flex flex-col justify-center items-center md:flex-row md:justify-start md:gap-6 border-b border-[#2c2c2d]">
        <div className="w-20 md:w-14 h-full flex justify-center items-center">
            <img src="./src/assets/logo.svg" alt="Logo Unlimited Jerseys" />
        </div>
        <ul className="w-full md:w-auto flex gap-6 justify-around items-center">
           {
            menuItems.map((item, index) => {
              return (
                    <li key={index} className="text-white text-xs my-2 md:m-0 hover:text-yellow transition-all ease-out delay-150">
                        <a href={`#${item.replace('á', 'a')}`}>{item.toUpperCase()}</a>
                    </li>
              )
            })
           }
        </ul>
    </nav>
  )
}
