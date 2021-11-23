import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";







export const PurchaseList = () => {
    const currentUser = parseInt(localStorage.getItem("kandy_customer"))
    const currentDate = Date.now()
    const history = useHistory()
    const [products, setProducts] = useState([])
    const [purchase, setPurchase] = useState({
        customerId: currentUser,
        productLocationId: 1,
        quantity: 1,
        totalPrice: "",
        purchaseDate: currentDate.toString()
    })




    const makeOrder = (event) => {
        event.preventDefault()
        

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchase)
        }
        return fetch("http://localhost:8088/purchases", fetchOptions)
        .then(() => {
            history.push("/purchases")
        })
    }



    useEffect(
        () => {
            fetch("http://localhost:8088/productLocations?_expand=location&_expand=product")
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
                            return <div className="productObj" key={productObj.id}> {productObj.product.name} from {productObj.location.name} for ${productObj.product.price} <div className="purchase-input">
                                <label htmlFor="Quantity">Amount to Purchase:</label>
                                <input type="number"
                                    onChange={
                                        (evt) => {
                                            const copy = { ...purchase }
                                            copy.productLocationId = productObj.location.id
                                            copy.quantity = parseInt(evt.target.value)
                                            copy.totalPrice = evt.target.value * productObj.product.price
                                            setPurchase(copy)
                                        }
                                    }
                                />
                            </div> <button className="btn btn-primary" onClick={makeOrder}>
                                    Purchase
                                </button></div>
                        }

                    )
                }


            </div>


        </>
    )
}