import {useEffect, useState} from "react"
import { getProducts} from "../ApiManager"
import "./Products.css"


export const ProductList = () => {
    const [products, setProducts] = useState([])
    
    



    useEffect(
        () => {
            getProducts()
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        //this array right here is not watching any state, so this code effectively runs once -- STEVE
        []
    )
    
     
           
       
       
       
    
    
        return (
            <>
            <div>
                <h2>Our Tasty Candies</h2>
                {
                    products.map(
                        (productObj) => {
                            return <div className="product" key={productObj.id}>{productObj.name}, {productObj.productType.type}, ${productObj.price}</div> 
                        }
                        
                    )
                }
                
        
            </div>


            </>
        ) 
}