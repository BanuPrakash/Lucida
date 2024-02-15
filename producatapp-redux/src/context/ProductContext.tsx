import { ReactNode, createContext, useEffect, useState } from "react";
import Product from "../model/Product";
import axios from "axios";
type ProductState = {
    products: Product[]
}
type AppProps = {
    children:ReactNode
}
let ProductContext = createContext<ProductState|null>(null);

export default function ProductProvider({children}: AppProps) {
    let [products, setProducts] = useState<Product[]>([]);
    // componentDidMount --> right place to make API calls
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=5").then(response => {
            setProducts(response.data);
        });
    },[])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export {
    ProductContext
}