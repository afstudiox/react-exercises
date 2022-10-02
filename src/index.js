import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
// import App from "./Api";
import App from "./App";
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
