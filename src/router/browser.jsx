import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Orders } from '../pages/Orders';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/contacto' element={<Contact />} />
      <Route path='/pedidos' element={<Orders />} />
    </Route>
  )
);
