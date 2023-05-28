import { Form } from './Form'

export const Contacto = () => {
  return (
      <div id="contacto" className="w-full">
         <h2 className="text-5xl font-bold text-center mt-24 lg:mt-32">CONTÁCTANOS</h2>
       <section className="my-8 p-5  mx-auto lg:mt-32 xl:w-[1280px]">
          <p>En nuestro equipo estamos encantados de ayudarte en todo lo que necesites. Si tienes alguna pregunta, duda o simplemente deseas obtener más información sobre nuestros productos, no dudes en ponerte en contacto con nosotros.</p>
          <Form/>
       </section>
    </div>
  )
}
