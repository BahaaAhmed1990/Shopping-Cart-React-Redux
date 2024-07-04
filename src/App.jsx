import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container p-8">
      <Header />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Cart />} path="/cart"></Route>
      </Routes>
    </div>
  );
}

export default App;
