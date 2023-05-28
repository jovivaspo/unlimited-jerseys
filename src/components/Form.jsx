import React from 'react'

const initForm = {
  email: '',
  message: ''
}

export const Form = () => {
  const [form, setForm] = React.useState(initForm)
  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handlerSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.message) {
      return alert('Debe completar todos los campos')
    }
    // console.log(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email));
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      return alert('Correo no válido')
    }

    fetch('https://formsubmit.co/ajax/contact.unlimitedjerseys@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: form.email,
        message: form.message
      })
    })
      .then((response) => response.json())
      .then((data) => alert('Enviado correctamente'))
      .catch((error) => alert('Lo sentimos, inténtolo más tarde'))
      .finally(setForm(initForm))
  }
  // console.log(form);
  return (

      <form id='formulario' className='w-9/10 md:w-[380px]  min-h-[480px] rounded-2xl p-8 mx-auto my-16  flex flex-col justify-around gap-5 bg-black'>
        <img src='./logo.svg' alt="logo Unlimited Jerseys" className='w-[64px] mx-auto'/>
        <div className="flex flex-col gap-5">
          <label htmlFor="email" className='text-yellow'>Email</label>
          <input
          autoComplete='off'
            className='bg-transparent border-b border-yellow focus:outline-none text-sm'
            type="email"
            name="email"
            onChange={handlerChange}
            value={form.email}
            placeholder='example@gmail.com'
          />
        </div>
        <div className="flex flex-col gap-5">
          <label htmlFor="message" className='text-yellow'>Mensaje</label>
          <textarea
          className='bg-transparent border-b border-yellow text-sm  w-full p-4 focus:outline-none'
            name="message"
            id="message"
            onChange={handlerChange}
            value={form.message}
            placeholder='En qué podemos ayudarte'
          ></textarea>
          <button onClick={handlerSubmit}
          className="mx-auto my-8  w-[120px] px-4 py-2 flex justify-center border border-yellow text-yellow font-bold rounded-2xl hover:bg-yellow hover:text-black transition duration-200"
          >Enviar</button>
        </div>
      </form>

  )
}
