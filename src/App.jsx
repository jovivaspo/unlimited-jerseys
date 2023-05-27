import { Catalogo } from './components/Catalogo'
import { Contacto } from './components/Contacto'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Pedido } from './components/Pedido'

const items = [
  {
    title: 'Camisetas de Nueva Temporada',
    description: '¡Ya disponibles la camisetas para la temporada 23-24! Viste con estilo y apoya a tu equipo con las camisetas de la próxima temporada',
    image: './barcelona-23-24.jpg',
    link: 'https://drive.google.com/drive/folders/1AK-nO3sYuAd7B1FtXvI4riGh3Jie66KM'
  },
  {
    title: 'Camisetas Temporada 22-23',
    description: '¡Experimenta la emoción en tiempo real con nuestras camisetas de la temporada 22-23! No te pierdas esta oportunidad de obtener tu camiseta favorita con un fantástico descuento.',
    image: './real-madrid-22-23.jpg',
    link: 'https://drive.google.com/drive/folders/1aad16Inxs2QUvuZlBHKsKTrWwfvV4ybV'
  },
  {
    title: 'Camisetas Retro',
    description: 'Sumérgete en la nostalgia del fútbol con nuestras camisetas retro. Rinde homenaje a los ídolos de antaño y revive los momentos inolvidables que han dejado huella en la historia del deporte.',
    image: './betis-retro.jpg',
    link: 'https://drive.google.com/drive/folders/1bCVvEoOnvQEqnCuyAZUOc-TIXbI6V6_0'
  },
  {
    title: 'Camisetas NBA',
    description: '¡Viste como los verdaderos profesionales y demuestra tu amor por el baloncesto con nuestras camisetas de la NBA!',
    image: './miami-nba.jpeg',
    link: 'https://drive.google.com/drive/folders/1K2_kofSJTpC2GEIJU1BwvvdXfyVshqKN'
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
        <Contacto/>
      </main>
    </>
  )
}

export default App
