import { Routes, Route } from "react-router-dom"
import ShoppingCart from "../../pages/ShoppingCart/ShoppingCart";
//import MainPage from '../Main/Main'
import Home from "../../pages/Home/Home";
import FormContact  from "../FormContact/FormContact";
import StorePokes from "../../pages/StorePokes/StorePokes";

/*
import Products from "../pages/Products/Products"
import Register from "../pages/Register/Register"
import Lacteos from '../pages/Products/Lacteos';
import Verduras from '../pages/Products/Verduras';*/

const Router = () => {
    return (

            <Routes>
             
                <Route path='/shopping' element={<ShoppingCart />} />
                <Route path='/home' element={<Home />} />
                <Route path='/contact' element={<FormContact />} />
                <Route path='/store' element={<StorePokes /> } />
                <Route path='*' element={<Home />} />
            </Routes>

    )
}

export default Router