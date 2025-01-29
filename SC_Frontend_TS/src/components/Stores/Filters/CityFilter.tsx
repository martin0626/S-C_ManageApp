import FilterSelection from "./FilterSelection";


export default function CityFilter(){

    const cities = ['Sofia', 'Varna', 'Plovdiv', 'Burgas', 'Stara Zagora'];


    return (
        <FilterSelection filterName={'city'} filterValues={cities}/>
    )
}