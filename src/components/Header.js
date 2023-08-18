import React from "react";
import { useContext } from "react";
import { SelectedProductsContext } from "./App";

const Header = () =>  {

    const context = useContext(SelectedProductsContext);

        return (
            <nav className="bg-primary p-2 text-white">
                <h3>Seçilen Ürünler: { context.selectedProducts.length }</h3>
            </nav>
        );
}

export default Header;