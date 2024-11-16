import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { PATH } from '@/constants/routes';
import DashboardPage from '@/pages/dashboard';
import MapPage from '@/pages/map';
import QRCodePage from '@/pages/qrcode';
import RoutePage from '@/pages/route';
import { QueryClientProvider } from '@/QueryClientProvider';

const publicRoutes = [
  {
    element: (
      <>
        <ScrollRestoration />
        <Outlet />
      </>
    ),
    children: [
      { path: PATH.INDEX, element: <DashboardPage /> },
      { path: PATH.QRCODE, element: <QRCodePage /> },
      { path: PATH.MAP, element: <MapPage /> },
      { path: PATH.ROUTE, element: <RoutePage /> },
      { path: '*', element: <Navigate to={PATH.INDEX} replace /> },
    ],
  },
];

const router = createBrowserRouter([...publicRoutes]);

const App = () => {
  return (
    <QueryClientProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
