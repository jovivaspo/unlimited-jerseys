import { Form } from './Form';

export const Contacto = () => {
  return (
    <div id='contacto' className='w-full bg-[#f5f5f5] flex flex-col pb-20'>
      <h2 className='w-full xl:w-[1000px] mx-auto text-4xl font-bold text-left mt-20'>CONTÁCTANOS</h2>
      <section className='mt-8  mx-auto  xl:w-[1000px] flex flex-col justify-around gap-8'>
        <p className='text-base'>
          En nuestro equipo estamos encantados de ayudarte en todo lo que necesites. Si tienes alguna pregunta, duda o simplemente deseas obtener más información sobre nuestros productos, no dudes en
          ponerte en contacto con nosotros.
        </p>
        <Form />
      </section>
    </div>
  );
};
