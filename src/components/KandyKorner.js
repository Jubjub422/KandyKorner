import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./NavBar/NavBar"


export const KandyKorner = () => {

    return (
        
        <Route>
            <NavBar />
            <ApplicationViews />
        </Route>
        
    )
}