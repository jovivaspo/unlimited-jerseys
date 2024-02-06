import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const pagesWitoutHeader = ['/'];

export const useLocationPage = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (pagesWitoutHeader.includes(location.pathname)) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  }, [location]);

  return {
    showHeader,
  };
};
