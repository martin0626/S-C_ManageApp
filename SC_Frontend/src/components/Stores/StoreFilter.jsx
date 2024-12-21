import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt, FaRegSun, FaFilter, FaSort } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { salonActions } from "../../store/salons-slice";
import { uiActions } from "../../store/ui-slice";
import CityFilter from "./Filters/CityFilter";
import ServiceFilter from "./Filters/ServicesFilter";
import SortFilter from "./Filters/SortFilter";



export default function FilterStores(){
    const [selectedInput, setSelectedInput] = useState(false);
    const dispatch = useDispatch();
    const searchRef = useRef();
    const filters = useSelector((state)=> state.salons.filters);
    const filterCompMapper = {
        'city': <CityFilter/>,
        'service': <ServiceFilter/>,
        'sort': <SortFilter/>
    }


    const handleSelectFilter = (filterName)=>{
        dispatch(uiActions.openMenu({comp: filterCompMapper[filterName]}));
    }


    const inputFocus = (e)=>{
        let inputData = e.target.value;
        if(!inputData){
            setSelectedInput(!selectedInput);
        }
    }


    const handleSearch = (e)=>{
        let inputData = searchRef?.current.value;
        dispatch(salonActions.setFilters({...filters, search: inputData}))
        searchRef.current.value = '';
        setSelectedInput(false);
    };

    const clearFilters = ()=>{
        dispatch(salonActions.resetFilters());
        searchRef.current.value = '';
        setSelectedInput(false);
    }

    return (
        <div className="stores-filter">
            <div className="stores-filter-main">
                <div className="stores-filter-header">
                    <FaFilter/>
                    <h1>Filters</h1>
                </div>
                <div className="stores-filter-controller">
                        <div onClick={()=>handleSelectFilter('city')} className="single-filter activeFilter">
                            <FaMapMarkerAlt/>
                            <p>City</p>
                        </div>
                        <div onClick={()=>handleSelectFilter('service')} className="single-filter">
                            <FaRegSun/>
                            <p>Service</p>
                        </div>
                        <div onClick={()=>handleSelectFilter('sort')} className="single-filter">
                            <FaSort/>
                            <p>Sort</p>
                        </div>
                        <div className="single-filter" onClick={clearFilters}>
                            <FaFilterCircleXmark/>
                            <p>Show All</p>
                        </div>
                </div>
            </div>
            <div className="stores-filter-search">
                <input ref={searchRef} onFocus={inputFocus} onBlur={inputFocus} type="text" placeholder="Search..."/>
                <div onClick={handleSearch} className={`search-details ${selectedInput ? 'input-active' : 'input-inactive'}`}>
                    <FaSearch/>
                </div>
            </div>
        </div>
    )
}