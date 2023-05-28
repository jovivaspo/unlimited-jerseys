
export const Footer = () => {
  return (
    <footer className="bg-black w-full h-[180px] flex justify-around items-center">
        <img src='./logo.svg' alt="logo Unlimited Jerseys" className='w-[80px] md:w-[100px]'/>
        <ul>
            <li><a className="flex gap-2" href="https://www.instagram.com/unlimitedjerseys123/"><img src="./Instagram.svg" alt="https://www.instagram.com/unlimitedjerseys123/" />@unlimitedjerseys123</a></li>
           <li><a className="flex gap-2" href="https://wa.me/722452544"><img src="./Whatsapp.svg" alt="whatsapp" />+34 722 45 25 44</a></li>
           <li className="flex gap-2"><img src="./Gmail.svg" alt="https://www.instagram.com/unlimitedjerseys123/" />contact.unlimitedjerseys@gmail.com</li>
        </ul>
    </footer>
  )
}
