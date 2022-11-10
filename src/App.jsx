import { GlobalStyle } from "./styles/global.js";
import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={1500} />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
