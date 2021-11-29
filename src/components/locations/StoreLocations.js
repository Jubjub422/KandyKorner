import {useEffect, useState} from "react"
import { getLocations } from "../ApiManager"
import "./Locations.css"

export const Locations = () => {
        const [stores, setLocations] = useState([])

        useEffect(
            () => {
                getLocations()
                    .then((locationArray) => {
                        setLocations(locationArray)
                    })
            },
            //this array right here is not watching any state, so this code effectively runs once -- STEVE
            []
        )
        
            return (
                <>
                <div>
                    <h2>Our Perfect Locations</h2>
                    {
                        stores.map(
                            (storeObject) => {
                                return <p className="locations" key={`store--${storeObject.id}`}>{storeObject.name} {storeObject.address}</p> 
                            }
                        )
                    }
            
                </div>


                </>
            ) 
}