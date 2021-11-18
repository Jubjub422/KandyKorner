import React, { useEffect, useState } from "react"




export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])


    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    setEmployees(data)
                })
        },
        []
    )

        return (
            <div>

            {
                employees.map(
                    (employee) => {
                        return <p key={employee.id}>{employee.name}</p>
                    }
                )
            }

            </div>
        )


}