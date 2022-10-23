import { Navigate } from 'react-router-dom';
import Reserves from "./pages/Reserves";
import Exchange from "./pages/Exchange";

const ROUTES = [
  {
    path: '',
    element: <Exchange/>
  },
  {
    path: 'reserves',
    element: <Reserves/>,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];

export default ROUTES;
