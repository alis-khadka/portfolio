import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss';
import App from './App';
import LinksPage from './LinksPage';
import Resume from './Resume';
import reportWebVitals from './reportWebVitals';
import { Analytics } from '@vercel/analytics/react';
import ErrorPage from './ErrorPage';
import PrintResume from './PrintResume';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resume",
    element: <Resume />,
    errorElement: <ErrorPage />
  },
  {
    path: "/print_resume",
    element: <PrintResume />,
    errorElement: <ErrorPage />
  },
  {
    path: "/links",
    element: <LinksPage />,
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);

reportWebVitals();
