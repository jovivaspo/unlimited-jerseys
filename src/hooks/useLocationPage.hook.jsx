import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const pagesWitoutHeader = ['/pedidos', '/contacto'];

export const useLocationPage = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (pagesWitoutHeader.includes(location.pathname)) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location]);

  return {
    showHeader,
  };
};
