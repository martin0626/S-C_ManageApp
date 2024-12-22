import { FaSort, FaStar, FaMapMarkerAlt  } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { salonActions } from "../../../store/salons-slice";


export default function SortFilter(){
    const filters = useSelector(state=> state.salons.filters);
    const dispatch = useDispatch();
    const sort = filters.sort;
    

    const handleSelectSort = (sortString)=>{
        dispatch(salonActions.setFilters({...filters, sort: sortString}));
    };


    return (
         <div className="seltionFilter">
            <div className="seltionFilter-header">
                <FaSort/>
                <h1 style={{textTransform: 'capitalize'}}>Sort</h1>
            </div>
            <div className="sort-content">
                <div onClick={()=>handleSelectSort('-rate')} className={`sort-content-filter ${sort === '-rate' && 'active-sort'}`}>
                    <FaStar/>    
                    <p>Best Rate</p>
                </div>
                <div className="sort-content-filter">
                    <FaMapMarkerAlt/>    
                    <p>Nearest Location</p>
                </div>
                <div className="sort-content-filter">
                    <FaMoneyBill1Wave/>    
                    <p>Best Prices</p>
                </div>
            </div>
            <div className="seltionFilter-btns">
                <button className="mainBtnWhite">Apply</button>
                <button className="mainBtnWhite">Clear</button>
            </div>
        </div>
    )
}