import React from "react";
import ReactDOM from "react-dom/client";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import App from "./App.jsx";
import i18n from "./translation/i18n.js";
import "./index.css";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
