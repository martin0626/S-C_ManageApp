import SingleStore from "./SingleStore";


export default function AllStores({salons}){
    
    
    return (
        <div className="stores-main">
            {salons && salons.map(s=>{
                return <SingleStore key={s.slug} salon={s}/>
            })}
        </div>
    )
}