import { GlobalStyle } from "./styles/global.js";
import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
