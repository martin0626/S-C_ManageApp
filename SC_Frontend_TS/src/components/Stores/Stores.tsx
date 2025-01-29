import AllStores from "./AllStores";
import FilterStores from "./StoreFilter";
import { useSalons } from "../../hooks/useSalons";
import LoadingComp from "../UI/Loading";
import ErrorBox from "../UI/ErrorBox";
import { SalonsSliceStateT } from "../../store/salons-slice";
import { useAppSelector } from "../../hooks/reduxHooks";




export default function Stores(){
    const filters = useAppSelector((state): SalonsSliceStateT=> state.salons.filters);
    const { data, isLoading, isError, error } = useSalons(filters);

    let salonsContent = isError ? <ErrorBox err={error}/> : <AllStores salons={data}/>

    return (
        <section className="stores">
            <FilterStores/>
            {
                isLoading
                    ?
                <LoadingComp/>
                    :
                salonsContent
            }
        </section>
    )
}