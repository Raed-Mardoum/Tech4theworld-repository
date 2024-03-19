import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Donate from './donatepage';
import Contactpage from './contactpage';
import './index.css';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";


const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
},
{
    path: "donate",
    element: <Donate />,
},
{
    path: "contact",
    element: <Contactpage />,
},
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);


//ReactDOM.render(<Donate />, document.getElementById('root'));