import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt, FaRegSun, FaFilter, FaSort } from "react-icons/fa";
import { FaFilterCircleXmark, FaRegCircleXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { salonActions } from "../../store/salons-slice";
import { uiActions } from "../../store/ui-slice";



export default function FilterStores(){
    const [selectedInput, setSelectedInput] = useState(false);
    const dispatch = useDispatch();
    const searchRef = useRef();
    const filters = useSelector((state)=> state.salons.filters);
    


    const handleSelectFilter = (filterName)=>{
        dispatch(uiActions.openMenu({comp: filterName}));
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
    };

    const removeSearchFilter = ()=>{
        searchRef.current.value = '';
        setSelectedInput(false);
        dispatch(salonActions.setFilters({...filters, search: ''}))
    } 

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
                        <div onClick={()=>handleSelectFilter('city')} className={`single-filter ${filters.city.length > 0 && 'activeFilter'}`}>
                            <FaMapMarkerAlt/>
                            <p>City</p>
                        </div>
                        <div onClick={()=>handleSelectFilter('service')} className={`single-filter ${filters.services.length > 0 && 'activeFilter'}`}>
                            <FaRegSun/>
                            <p>Service</p>
                        </div>
                        <div onClick={()=>handleSelectFilter('sort')} className={`single-filter ${filters.sort && 'activeFilter'}`}>
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
                {
                    filters.search != '' 
                        && 
                    <div onClick={removeSearchFilter} className={`search-clear`}>
                        <FaRegCircleXmark/>
                    </div>
                }
                <div onClick={handleSearch} className={`search-details ${selectedInput ? 'input-active' : 'input-inactive'}`}>
                    <FaSearch/>
                </div>
            </div>
        </div>
    )
}