import { FaChevronRight } from "react-icons/fa";
import { EmployeeT } from "../../../pages/Stores";

type EmployeeSingleInfoPropsT = {
    isActive: boolean,
    employeeData: EmployeeT,
    onSelectHandler: (id:string) => void
}


export default function EmployeeSingleInfo({ onSelectHandler, employeeData, isActive}: EmployeeSingleInfoPropsT){
    return(
        <div onClick={()=>onSelectHandler(employeeData._id)} className={`single-emp-el ${ isActive && 'active-single-emp' }`}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
            <div className="emp-list-main-text">
                <p className="emp-name">{employeeData.name}</p>
                <p className="emp-title">{employeeData.title}</p>
            </div>
            <span className="single-emp-selected-arr"><FaChevronRight /></span>
        </div>
    )
}