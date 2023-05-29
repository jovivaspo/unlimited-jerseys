import { Form } from './Form'

export const Contacto = () => {
  return (
      <div id="contacto" className="w-full bg-[#f5f5f5] flex flex-col justify-around">
         <h2 className="text-5xl font-bold text-center mt-24 lg:mt-32">CONTÁCTANOS</h2>
       <section className="my-16 p-5  mx-auto  xl:w-[1280px] flex flex-col justify-around gap-8">
          <p className='text-base text-center'>En nuestro equipo estamos encantados de ayudarte en todo lo que necesites. Si tienes alguna pregunta, duda o simplemente deseas obtener más información sobre nuestros productos, no dudes en ponerte en contacto con nosotros.</p>
          <Form/>
       </section>
    </div>
  )
}
