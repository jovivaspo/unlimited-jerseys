import { RouterProvider } from 'react-router-dom';
import { router } from './router/browser';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
