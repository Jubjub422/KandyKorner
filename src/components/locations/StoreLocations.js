import {useEffect, useState} from "react"


export const Locations = () => {
        const [stores, setLocations] = useState([])

        useEffect(
            () => {
                fetch("http://localhost:8088/locations")
                    .then(res => res.json())
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
                    {
                        stores.map(
                            (storeObject) => {
                                return <h2 key={`store--${storeObject.id}`}>{storeObject.name} {storeObject.address}</h2> 
                            }
                        )
                    }
            
                </div>


                </>
            ) 
}