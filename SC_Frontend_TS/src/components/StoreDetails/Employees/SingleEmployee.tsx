import { FaChevronRight } from "react-icons/fa";

export default function EmployeeSingleInfo({isActive}: {isActive: boolean}){
    return(
        <div className={`single-emp-el ${ isActive && 'active-single-emp' }`}>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
            <div className="emp-list-main-text">
                <p className="emp-name">George</p>
                <p className="emp-title">Barber</p>
            </div>
            <span className="single-emp-selected-arr"><FaChevronRight /></span>
            
        </div>
    )
}