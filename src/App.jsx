import { GlobalStyle } from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default.js";
import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <ToastContainer autoClose={1500} />
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
