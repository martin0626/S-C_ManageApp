import { FaSort, FaStar, FaMapMarkerAlt  } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { salonActions } from "../../../store/salons-slice";
import { uiActions } from "../../../store/ui-slice";
import LoadingComp from "../../UI/Loading";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";


export default function SortFilter(){
    const filters = useAppSelector(state=> state.salons.filters);
    const dispatch = useAppDispatch();
    const sort = filters.sort;
    const isLoading = useAppSelector(state=> state.ui.isLoading);

    
    const handleApply = ()=>{
        dispatch(uiActions.setIsLoading());

        setTimeout(()=>{
            dispatch(uiActions.clearIsLoading());
            dispatch(uiActions.closeMenu());
        }, 500)
    }

    const handleSelectSort = (sortString: string)=>{
        dispatch(salonActions.setFilters({...filters, sort: sortString}));
    };


    const handleClear = ()=>{
        dispatch(salonActions.setFilters({...filters, sort: ''}));
    }


    return (
         <div className="seltionFilter">
            <div className="seltionFilter-header">
                <FaSort/>
                <h1 style={{textTransform: 'capitalize'}}>Sort</h1>
            </div>
           { 
                isLoading
                    ?
                <div  className="loading-visual">
                    <LoadingComp/>
                </div>
                    :
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
            }
            <div className="seltionFilter-btns">
                <button onClick={handleApply} className="mainBtnWhite">Apply</button>
                <button onClick={handleClear} className="mainBtnWhite">Clear</button>
            </div>
        </div>
    )
}