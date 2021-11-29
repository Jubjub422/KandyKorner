import { useState, useEffect } from "react";
import { getLocations } from "../../ApiManager";


export const NewEmployeeLocationSelect = ({employee, setEmployee}) => {
    const [locations, setLocations] = useState([])
    
    
    useEffect(
        () => {
            getLocations()
                .then((locationArray) => {
                    setLocations(locationArray)
                })
        },
        []
    )
    

    
    
    
    
    return (
        <select 
            onChange={
                (evt)=> {
                    const copy = { ...employee }
                                copy.locationId = parseInt(evt.target.value)
                                setEmployee(copy)
                }
        }>
            <option value="0">Select your location</option>
            {
                locations.map(
                    (location) => {
                        return <option key={location.id} value={location.id}>{location.name}</option>
                    }
                )
            }
        </select> 
        
    )
}

