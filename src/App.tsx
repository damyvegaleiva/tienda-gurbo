import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <HeaderContainer />

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/cart" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
