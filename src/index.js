import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
// Create browser history to use in the Redux store
const history = createBrowserHistory({ basename: "/" });

const initialState = window.initialState;

const store = configureStore(history, initialState);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <React.StrictMode>
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    </React.StrictMode>
  </div>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
