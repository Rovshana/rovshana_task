import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/shared/Navbar";
 import HomePage from "./pages";
import { CartPage } from "./pages/CartPage";
import { ProductDetail } from "./pages/ProductDetail";
import ProductsPage from "./pages/ProductsPage";



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/productspage" element={<ProductsPage/>} />
        <Route path="/productDetail" element={<ProductDetail/>} />
        <Route path="/cartpage" element={<CartPage/>} />
      </Routes>
     
    </div>
  );
}

export default App;
