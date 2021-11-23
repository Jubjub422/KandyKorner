import {useEffect, useState} from "react"
import "./Products.css"


export const ProductList = () => {
    const [products, setProducts] = useState([])
    
    



    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
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