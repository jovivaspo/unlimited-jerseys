import { Link } from 'react-router-dom';

export const Pedido = () => {
  return (
    <div id='pedido' className='w-full xl:w-[1000px] mx-auto my-20 p-2 md:p-0'>
      <h2 className='text-4xl font-bold mx-auto'>PEDIDOS Y DEVOLUCIONES</h2>
      <section className='my-8 text-sm'>
        <h3 className='mb-4 text-3xl font-bold text-yellow '> ¿Quieres realizar un pedido? Te explicamos cómo hacerlo.</h3>
        <ol>
          <li>
            <p>1. Selecciona tu camiseta favorita: Explora nuestra amplia selección de camisetas y elige la que más te guste.</p>
          </li>
          <li>
            <p>2. Realiza tu pedido. Puedes hacerlo de tres formas:</p>
            <ul className='list-disc ml-8'>
              <li>
                Formulario de contacto: Completa nuestro{' '}
                <Link className='text-yellow font-bold' to='/contacto'>
                  formulario de contacto
                </Link>{' '}
                con los detalles de los productos seleccionados y las tallas correspondientes.
              </li>
              <li>
                Whatsapp: Envíanos un mensaje por{' '}
                <Link className='text-yellow font-bold' target='_blank' to='https://wa.me/722452544' rel='noreferrer'>
                  Whatsapp
                </Link>{' '}
                con los productos elegidos y las tallas que necesitas.
              </li>
              <li>
                {' '}
                Mensaje directo en Instagram: Si lo prefieres, también puedes contactarnos por mensaje directo en{' '}
                <Link className='text-yellow font-bold' target='_blank' to='https://www.instagram.com/unlimitedjerseys123/' rel='noreferrer'>
                  Instagram
                </Link>{' '}
                para realizar tu pedido.
              </li>
            </ul>
          </li>
          <li>
            <p>3. Verificación de disponibilidad: Una vez recibamos tu pedido, verificaremos la disponibilidad de los productos seleccionados y te informaremos en breve.</p>
          </li>
          <li>
            <p>4. Pago seguro: Para garantizar una transacción segura y cómoda, aceptamos pagos a través de PayPal. ¡Así podrás realizar tu pago de forma rápida y sin preocupaciones!</p>
          </li>
          <li>
            <p>
              5. Preparación y envío: Una vez confirmado tu pedido, nuestro equipo se encargará de prepararlo cuidadosamente en un plazo de 2-3 días. Recibirás un código de seguimiento para que puedas
              rastrear tu paquete en todo momento.
            </p>
          </li>
          <li>
            <p>
              6. Entrega en tu puerta: Dentro de un plazo de 2-3 semanas, recibirás tus productos en la dirección que nos hayas proporcionado. ¡Listo para lucir tus camisetas favoritas con estilo y
              pasión!
            </p>
          </li>
        </ol>
        <p>
          Recuerda, en nuestro servicio, no aceptamos pagos contrareembolso. Si tienes alguna pregunta adicional o necesitas más información, estaremos encantados de ayudarte. ¡Esperamos recibir tu
          pedido y brindarte la mejor experiencia de compra posible!
        </p>
      </section>
      <section className='my-8 text-sm'>
        <h3 className='mb-4 text-3xl font-bold text-yellow '> Cómo realizar un cambio o devolución</h3>

        <p className='my-4'>El plazo de cambio o devolución es de 7 días naturales a partir de la fecha de la recepción del pedido.</p>

        <p className='my-4'>
          Si la responsabilidad del cambio o devolución es de nuestra tienda, ya sea por defecto/tara de producto o error por nuestra parte, deberás ponerte en contacto con el personal de servicio al
          cliente por email o{' '}
          <Link className='text-yellow font-bold' target='_blank' to='https://wa.me/722452544' rel='noreferrer'>
            Whatsapp
          </Link>{' '}
          . Nosotros correremos con los gastos de envío correspondientes.
        </p>

        <p>Los casos siguientes son de responsabilidad de los clientes:</p>

        <ol>
          <li>
            <p>1. Cambio de tallas o productos.</p>
          </li>
          <li>
            <p>2. Los productos personalizados no tienen devolución o cambio.</p>
          </li>
          <li>
            <p>3. Uso o lavado incorrecto del producto tras la compra.</p>
          </li>
        </ol>

        <p>En todos estos casos, el cliente correrá con los gastos de envío correspondientes.</p>

        <p className='my-4'>
          Si tienes alguna pregunta adicional o necesitas más información, estaremos encantados de ayudarte. ¡Esperamos recibir tu pedido y brindarte la mejor experiencia de compra posible!
        </p>
      </section>
    </div>
  );
};
