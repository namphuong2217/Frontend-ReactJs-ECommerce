import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//domain dev-oot1f1lr.eu.auth0.com
//clientID I8tN6pkg4u9njVKXWvpj6cwbH8a4hcZO
ReactDOM.render(
  <Auth0Provider
    domain="dev-oot1f1lr.eu.auth0.com"
    // domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId="I8tN6pkg4u9njVKXWvpj6cwbH8a4hcZO"
    // clientID={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
