
export const Pedido = () => {
  return (
    <div id="pedido" className="w-full">
       <h2 className="text-5xl font-bold text-center mt-24 lg:mt-32">CÓMO HACER TU PEDIDO</h2>
       <section className="my-16 p-5  mx-auto  xl:w-[1280px] xl:p-8">
           <h3 className="mb-4 text-3xl font-bold text-yellow "> ¿Quieres realizar un pedido? Te explicamos cómo hacerlo.</h3>
        <ol>
          <li><p>1. Selecciona tu camiseta favorita: Explora nuestra amplia selección de camisetas y elige la que más te guste.</p></li>
          <li><p>2. Realiza tu pedido. Puedes hacerlo de tres formas:</p>
          <ul className="list-disc ml-8">
            <li>Formulario de contacto: Completa nuestro <a className="text-yellow font-bold" href="#formulario">formulario de contacto</a> con los detalles de los productos seleccionados y las tallas correspondientes.</li>
            <li>Whatsapp: Envíanos un mensaje por  <a className="text-yellow font-bold"
                  aria-label="Chat on WhatsApp"
                  target="_blank"
                  href="https://wa.me/722452544" rel="noreferrer">
                      Whatsapp
                  </a> con los productos elegidos y las tallas que necesitas.</li>
            <li> Mensaje directo en Instagram: Si lo prefieres, también puedes contactarnos por mensaje directo en <a className="text-yellow font-bold" target="_blank" href="https://www.instagram.com/unlimitedjerseys123/" rel="noreferrer">Instagram</a> para realizar tu pedido.</li>
          </ul>
          </li>
          <li>
            <p>3. Verificación de disponibilidad: Una vez recibamos tu pedido, verificaremos la disponibilidad de los productos seleccionados y te informaremos en breve.</p>
          </li>
          <li>
            <p>
              4. Pago seguro: Para garantizar una transacción segura y cómoda, aceptamos pagos a través de PayPal. ¡Así podrás realizar tu pago de forma rápida y sin preocupaciones!
            </p>
          </li>
          <li>
            <p>5. Preparación y envío: Una vez confirmado tu pedido, nuestro equipo se encargará de prepararlo cuidadosamente en un plazo de 2-3 días. Recibirás un código de seguimiento para que puedas rastrear tu paquete en todo momento.</p>
          </li>
          <li><p>
            6. Entrega en tu puerta: Dentro de un plazo de 2-3 semanas, recibirás tus productos en la dirección que nos hayas proporcionado. ¡Listo para lucir tus camisetas favoritas con estilo y pasión!
            </p></li>
        </ol>
        <p>Recuerda, en nuestro servicio, no aceptamos pagos contrareembolso. Si tienes alguna pregunta adicional o necesitas más información, estaremos encantados de ayudarte. ¡Esperamos recibir tu pedido y brindarte la mejor experiencia de compra posible!</p>
       </section>
    </div>

  )
}
