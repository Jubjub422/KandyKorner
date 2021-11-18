import { Locations } from "./locations/StoreLocations"
import { ProductList } from "./ProductList/Products"
import { Route } from "react-router-dom"
import { EmployeeSignUpForm } from "./Employees/EmployeeForm/EmployeeSignUp"
import { EmployeeList } from "./Employees/EmployeeList"
import { CustomerList } from "./Customers/CustomerList"






//!responsible for observing a change and rendering specific components based on that change.
export const ApplicationViews = () => {
    return (
        <>
            <Route path="/products">
                <ProductList />
            </Route>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/employees/create">
                <EmployeeSignUpForm />
            </Route>
            <Route exact path="/">
                <Locations />
            </Route>
            
        </>
    )
}




