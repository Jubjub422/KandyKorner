import { Locations } from "./locations/StoreLocations"
import { ProductList } from "./ProductList/Products"


export const KandyKorner = () => {

    return (
        <>
            <h1>Kandy Korner</h1>
            <Locations/>
            <h1>All Our Products</h1>
            <ProductList/>
        </>
    )
}