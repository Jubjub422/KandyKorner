



export const getCustomers = () => {
    return fetch ("http://localhost:8088/customers")
            .then(res => res.json())
}

export const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
    .then(res => res.json())
}

export const getLocations = () => {
    return fetch("http://localhost:8088/locations")
                    .then(res => res.json())
}

export const getProducts = () => {
   return fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
}