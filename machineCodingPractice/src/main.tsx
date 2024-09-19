import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/scroll",
    element: <InfiniteScroll/>,
  },
]);

createRoot(document.getElementById('root')!).render(
<RouterProvider router={router} />
)
