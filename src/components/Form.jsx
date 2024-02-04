import React from 'react';

const initForm = {
  email: '',
  message: '',
};

export const Form = () => {
  const [form, setForm] = React.useState(initForm);
  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      return alert('Debe completar todos los campos');
    }
    // console.log(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email));
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      return alert('Correo no válido');
    }

    fetch('https://formsubmit.co/ajax/contact.unlimitedjerseys@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        message: form.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => alert('Enviado correctamente'))
      .catch((error) => alert('Lo sentimos, inténtolo más tarde'))
      .finally(setForm(initForm));
  };
  // console.log(form);
  return (
    <form id='formulario' className='flex flex-col justify-start tems-center w-full gap-8'>
      <div className='flex flex-col gap-5  w-[90%] md:max-w-[680px]'>
        <label htmlFor='email'>Email</label>
        <input autoComplete='off' className='bg-white focus:outline-none text-sm w-full p-4' type='email' name='email' onChange={handlerChange} value={form.email} placeholder='example@gmail.com' />
      </div>
      <div className='flex flex-col gap-5 w-[90%] md:max-w-[680px]'>
        <label htmlFor='message'>Mensaje</label>
        <textarea
          className='bg-white text-sm  w-full focus:outline-none p-4'
          name='message'
          id='message'
          onChange={handlerChange}
          value={form.message}
          placeholder='En qué podemos ayudarte'
        ></textarea>
        <button onClick={handlerSubmit} className='my-8 w-[120px] px-4 py-2 flex justify-center border border-black  font-bold  hover:bg-black hover:text-white transition duration-200'>
          Enviar
        </button>
      </div>
    </form>
  );
};
