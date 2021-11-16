import {useEffect, useState} from "react"



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
                {
                    products.map(
                        (productObj) => {
                            return <p key={productObj.id}>{productObj.name}, {productObj.productType.type}, ${productObj.price}</p>
                        }
                    )
                }
        
            </div>


            </>
        ) 
}