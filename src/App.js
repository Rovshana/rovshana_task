import { Route, Routes } from "react-router-dom";
 import HomePage from "./pages";
import ProductsPage from "./pages/ProductsPage";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/productspage" element={<ProductsPage/>} />
      </Routes>
     
    </div>
  );
}

export default App;
