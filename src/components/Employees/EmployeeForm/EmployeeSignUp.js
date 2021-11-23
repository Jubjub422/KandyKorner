import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NewEmployeeLocationSelect } from "./EmployeeLocationSelect";
import "./SignUp.css"





export const EmployeeSignUpForm = () => {
    const [employee, setEmployee] = useState({
        name:"",
        locationId:0,
        manager: false,
        fullTime: false,
        hourlyRate:0
    });


    const history = useHistory()

    
    const saveEmployee = (event) => {
        event.preventDefault()
        

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        }
        //*when doing a post, you CANNOT have an embed or anything else in the api link. It must just be a direct reference to the api.
        return fetch("http://localhost:8088/employees", fetchOptions)
            .then(() => {
                history.push("/employees")
            })
    }
        //! it would be good practice to have each piece of the form be in its own module, and then used here. 
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Employee Registration form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Name">Name:</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.name = evt.target.value
                                setEmployee(copy)
                            }
                        }
                    />
                </div>
           
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Location">Location:</label>
                   {/* Imported new component that is EXCLUSIVELY responsible for the select section of the form. */}
                    <NewEmployeeLocationSelect employee={employee} setEmployee={setEmployee}/>
                    


                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Manager">Manager:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.manager = evt.target.checked
                                setEmployee(copy)
                            }
                        }
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.fullTime = evt.target.checked
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate:</label>
                    <input type="number"
                        onChange={
                            (evt) => {
                                const copy = { ...employee }
                                copy.hourlyRate = parseInt(evt.target.value)
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn" onClick={saveEmployee}>
                Register
            </button>
        </form>
    )
}

