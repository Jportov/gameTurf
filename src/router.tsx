import { Route, Routes } from "react-router-dom";
import Categories from "./Pages/Categories";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import ProductPage from "./Pages/Product";



const RoutesComponent = ()=> (

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/categories" element={<Categories/>}/>
    <Route path="/product/:id" element={<ProductPage/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
  </Routes>
)

export default RoutesComponent;
