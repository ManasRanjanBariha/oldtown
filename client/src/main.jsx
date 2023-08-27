
// import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./Theme.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

