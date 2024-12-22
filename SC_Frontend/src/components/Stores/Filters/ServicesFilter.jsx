import FilterSelection from "./FilterSelection";

export default function ServiceFilter(){
    const services = ['barber', 'nails'];
    
    
    return (
        <FilterSelection filterName={'services'} filterValues={services}/>
    )
}