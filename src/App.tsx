import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';

import { PATH } from '@/constants/routes';
import DashboardPage from '@/pages/dashboard';
import MapPage from '@/pages/map';
import QRCodePage from '@/pages/qrcode';
import { QueryClientProvider } from '@/QueryClientProvider';
import RoutePage from '@/pages/route';

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
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
