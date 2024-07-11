import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/routes";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { persistor, store } from "./redux/features/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster></Toaster>
    </Provider>
  </React.StrictMode>
);
