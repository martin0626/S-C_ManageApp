import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { salonActions } from "../../../store/salons-slice";

export default function CityFilter(){

    const filters = useSelector(state=> state.salons.filters);
    const cities = ['Sofia', 'Varna', 'Plovdiv', 'Burgas', 'Stara Zagora'];
    const dispatch = useDispatch();

    const handleSelectFilter = (selectedCity)=>{
        let updatedCities = [...filters.city, selectedCity];
        dispatch(salonActions.setFilters({...filters, city: updatedCities}))
    }

    const handleRemoveFilter = (selectedCity)=>{
        let updatedCities = filters.city.filter(c => c != selectedCity);
        dispatch(salonActions.setFilters({...filters, city: updatedCities}))
    }

    const handleClearFilter = ()=>{
        dispatch(salonActions.setFilters({...filters, city: []}))
    }


    return (
        <div className="cityFilter">
            <div className="cityFilter-header">
                <FaMapMarkerAlt/> 
                <h1>City</h1>
            </div>
            <div className="cityFilter-content">
                {
                    cities.map(c=>
                        filters.city.indexOf(c) > -1 
                            ?
                        <p onClick={()=>handleRemoveFilter(c)} className="single-option active-filter">{c}</p>
                            :
                        <p onClick={()=>handleSelectFilter(c)} className="single-option">{c}</p>
                    )
                }
                
            </div>
            <div className="cityFilter-btns">
                <button className="mainBtnWhite">Apply</button>
                <button onClick={handleClearFilter} className="mainBtnWhite">Clear</button>
            </div>
        </div>
    )
}