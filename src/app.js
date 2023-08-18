import React from "react";
import ReactDom from 'react-dom/client';

import App from "./components/App";
import './css/main.scss';

// 1.Yöntem => React - CDN (eksik araçlar) - Babel
// 2.Yöntem => create-react-app

var root = ReactDom.createRoot(document.getElementById("root"));

// react cdn => varolan proje => (webpack + live server) + 
// create-react-app



// function formatPrice(product) {
//     return <p>{ product.price } TL;</p>
// }

// function printDescription(product) {
//     if (product.description) {
//         return <p> {product.description} </p>
//     }
// }





root.render(<App />);






