import { Routes, Route } from "react-router-dom"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import MainPage from '../Main/Main'
import FormContact  from "../FormContact/FormContact";

/*
import Products from "../pages/Products/Products"
import Register from "../pages/Register/Register"
import Lacteos from '../pages/Products/Lacteos';
import Verduras from '../pages/Products/Verduras';*/

const Router = () => {
    return (

            <Routes>
             
                <Route path='/shopping' element={<ShoppingCart />} />
                <Route path='/home' element={<MainPage />} />
                <Route path='/contact' element={<FormContact />} />
                <Route path='*' element={<MainPage />} />
            </Routes>

    )
}

export default Router