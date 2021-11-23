import React, { useEffect, useState } from "react"
import "./Customers.css"



export const CustomerList = () => {
    const [customers, setCustomers] = useState([])


    useEffect(
        () => {
            fetch ("http://localhost:8088/customers")
            .then(res => res.json())
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