import { TSingleStore } from "../../pages/Stores";
import SingleStore from "./SingleStore";


export default function AllStores({salons}: {salons: TSingleStore []}){
    
    
    return (
        <div className="stores-main">
            {
                salons.length > 0
                ?
                salons && salons.map(s=>{
                    return <SingleStore key={s.slug} salon={s}/>
                })
                :
                <div className="stores-main-missing">
                    <h1>There is no results!</h1>
                </div>
            }
        </div>
    )
}