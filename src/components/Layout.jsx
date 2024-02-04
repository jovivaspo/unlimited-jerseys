import React from 'react';
import { Outlet } from 'react-router-dom';
import { Whatsapp } from '../components/Whatsapp';
import { Footer } from './Footer';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <main>
        {children}
        <Whatsapp />
        <Footer />
      </main>
    </>
  );
};
