import AllStores from "./AllStores";
import FilterStores from "./StoreFilter";

export default function Stores(){
    return (
        <section className="stores">
            <FilterStores/>
            <AllStores/>
        </section>
    )
}