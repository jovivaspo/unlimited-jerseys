import React from 'react';
import { Outlet } from 'react-router-dom';
import { Whatsapp } from '../components/Whatsapp';
import { Footer } from './Footer';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Desktop/Navbar';
import { NavbarMb } from './Navbar/Mobil/NavbarMb';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <NavbarMb />
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
