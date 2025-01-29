import { FaMapMarkerAlt } from "react-icons/fa";
import { salonActions } from "../../../store/salons-slice";
import LoadingComp from "../../UI/Loading";
import { uiActions } from "../../../store/ui-slice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";


type SelectionFilterProps = {
    filterName: 'city' | 'services';
    filterValues: string [];
}

export default function FilterSelection({ filterName, filterValues }: SelectionFilterProps){
    const filters = useAppSelector(state=> state.salons.filters);
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state=> state.ui.isLoading);
    

    const handleSelectFilter = (selectedFilter: string)=>{
        let updatedFilter = [...filters[filterName], selectedFilter];
        dispatch(salonActions.setFilters({...filters, [filterName]: updatedFilter}))
    }

    const handleRemoveFilter = (selectedFilter: string)=>{
        let updatedFilter = filters[filterName].filter(c => c != selectedFilter);
        dispatch(salonActions.setFilters({...filters, [filterName]: updatedFilter}))
    }

    const handleClearFilter = ()=>{
        dispatch(salonActions.setFilters({...filters, [filterName]: []}))
    }

    const handleApply = ()=>{
        dispatch(uiActions.setIsLoading());

        setTimeout(()=>{
            dispatch(uiActions.clearIsLoading());
            dispatch(uiActions.closeMenu());
        }, 500)
    }


    return (
        <div className="seltionFilter">
            <div className="seltionFilter-header">
                <FaMapMarkerAlt/> 
                <h1 style={{textTransform: 'capitalize'}}>{filterName}</h1>
            </div>
            {

                isLoading
                    ?
                <div  className="loading-visual">
                    <LoadingComp/>
                </div>
                    :
                <div className="seltionFilter-content">
                    {
                        filterValues.map(c=>
                            filters[filterName].indexOf(c) > -1 
                                ?
                            <p key={c} style={{textTransform: 'capitalize'}} onClick={()=>handleRemoveFilter(c)} className="single-option active-filter">{c}</p>
                                :
                            <p key={c} style={{textTransform: 'capitalize'}} onClick={()=>handleSelectFilter(c)} className="single-option">{c}</p>
                        )
                    }
                </div>
            }
            <div className="seltionFilter-btns">
                <button onClick={handleApply} className="mainBtnWhite">Apply</button>
                <button onClick={handleClearFilter} className="mainBtnWhite">Clear</button>
            </div>
        </div>
    )
}