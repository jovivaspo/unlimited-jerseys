import { Catalogo } from './components/Catalogo'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { InstagramFeed } from './components/InstagramFeed'
import { Navbar } from './components/Navbar'
import { Pedido } from './components/Pedido'
import { Whatsapp } from './components/Whatsapp'

const items = [
  {
    title: 'Camisetas de Nueva Temporada',
    description: '¡Ya disponibles la camisetas para la temporada 23-24! Viste con estilo y apoya a tu equipo con las camisetas de la próxima temporada',
    image: 'https://res.cloudinary.com/dkhppc0r9/image/upload/c_scale,w_600/v1685458324/barcelona-23-24_fhfgcm.webp',
    link: 'https://drive.google.com/drive/folders/1AK-nO3sYuAd7B1FtXvI4riGh3Jie66KM',
    price: '30 €'
  },
  {
    title: 'Camisetas Temporada 22-23',
    description: '¡Experimenta la emoción en tiempo real con nuestras camisetas de la temporada 22-23! No te pierdas esta oportunidad de obtener tu camiseta favorita con un fantástico descuento.',
    image: 'https://res.cloudinary.com/dkhppc0r9/image/upload/c_scale,w_600/v1685458331/real-madrid-22-23_fxxhh6.webp',
    link: 'https://drive.google.com/drive/folders/1aad16Inxs2QUvuZlBHKsKTrWwfvV4ybV',
    price: '25 €'
  },
  {
    title: 'Camisetas Retro',
    description: 'Sumérgete en la nostalgia del fútbol con nuestras camisetas retro. Rinde homenaje a los ídolos de antaño y revive los momentos inolvidables que han dejado huella en la historia del deporte.',
    image: 'https://res.cloudinary.com/dkhppc0r9/image/upload/c_scale,w_600/v1685458325/betis-retro_mk1tvn.webp',
    link: 'https://drive.google.com/drive/folders/1bCVvEoOnvQEqnCuyAZUOc-TIXbI6V6_0',
    price: '32 €'
  },
  {
    title: 'Camisetas NBA',
    description: '¡Viste como los verdaderos profesionales y demuestra tu amor por el baloncesto con nuestras camisetas de la NBA!',
    image: 'https://res.cloudinary.com/dkhppc0r9/image/upload/c_scale,w_600/v1685458331/miami-nba_acn6o3.webp',
    link: 'https://drive.google.com/drive/folders/1KFoNW_pI9jrB0FncckzrzYtHGTbfbIAM',
    price: '30 €'
  }

]

function App () {
  return (
    <>
      <Navbar/>
      <Header/>
      <main>
        <Catalogo items={items}/>
        <Pedido/>
        <InstagramFeed/>
        <Contacto/>
        <Whatsapp/>
        <Footer/>
      </main>
    </>
  )
}

export default App
