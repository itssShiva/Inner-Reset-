import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/layout/Layout';
import App from './App';
import Products from './pages/Products';
import PrivacyPolicy from './pages/Privacy-policy';
import Terms from './pages/Terms';
import Refunds from './pages/Refunds';
import Shipping from './pages/Shipping';

/**
 * Add every new page as a child of the Layout route.
 * It will automatically be wrapped with the shared Navbar + Footer.
 *
 * Example – to add an /about page later:
 *   import About from './pages/About';
 *   { path: 'about', element: <About /> }
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,         element: <App /> },
      { path: 'products',    element: <Products /> },
      { path: 'privacy',     element: <PrivacyPolicy /> },
      { path: 'terms',       element: <Terms /> },
      { path: 'refund',      element: <Refunds /> },
      { path: 'refunds',     element: <Refunds /> },
      { path: 'shipping',    element: <Shipping /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
