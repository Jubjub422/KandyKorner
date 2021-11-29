import React, { useEffect, useState } from "react"
import { getCustomers } from "../ApiManager"
import "./Customers.css"



export const CustomerList = () => {
    const [customers, setCustomers] = useState([])


    useEffect(
        () => {
            getCustomers()
            .then((data) => {
                setCustomers(data)
            })
        },
        []

    )

        return (
            <div>
                <h2>Our Great Customers</h2>
                    {
                        customers.map(
                            (customer) => {
                                return <p className="customer" key={customer.id}>{customer.name}</p>
                            }
                        )
                    }



            </div>
        )


}