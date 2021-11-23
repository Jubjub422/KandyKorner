import React, { useEffect, useState } from "react"
import "./Employees.css"



export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])


    const fetchEmployees = () => {
        fetch("http://localhost:8088/employees")
        .then(res => res.json())
        .then((data) => {
            setEmployees(data)
        })
    }
    useEffect( 
        ()=> {
            fetchEmployees()
        },
    []
    )
    const deleteEmployee = (id) => {
        return fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
            .then(
                () => { fetchEmployees() }
            )
    }

        return (
            <div>
                    <h2>Our Wonderful Employees</h2>
            {
                employees.map(
                    (employee) => {
                        return <p className="employee" key={employee.id}>{employee.name}   <button onClick={() => {
                            deleteEmployee(employee.id)
                        }}>Delete</button>
                    </p>
                    }
                )
            }

            </div>
        )


}