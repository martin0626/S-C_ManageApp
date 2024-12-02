import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt, FaRegSun, FaFilter, FaSort } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";



export default function FilterStores(){
    const [selectedInput, setSelectedInput] = useState(false);
    const searchRef = useRef();


    const inputFocus = (e)=>{
        let inputData = e.target.value;
        if(!inputData){
            setSelectedInput(!selectedInput);
        }
    }


    const handleSearch = (e)=>{
        let inputData = searchRef?.current.value;
        console.log(inputData);
    }

    return (
        <div className="stores-filter">
            <div className="stores-filter-main">
                <div className="stores-filter-header">
                    <FaFilter/>
                    <h1>Filters</h1>
                </div>
                <div className="stores-filter-controller">
                        <div className="single-filter activeFilter">
                            <FaMapMarkerAlt/>
                            <p>City</p>
                        </div>
                        <div className="single-filter">
                            <FaRegSun/>
                            <p>Service</p>
                        </div>
                        <div className="single-filter">
                            <FaSort/>
                            <p>Sort</p>
                        </div>
                        <div className="single-filter">
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