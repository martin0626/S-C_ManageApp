import { EmployeeT } from "../../../pages/Stores";
import RatingStars from "../../UI/RatingStars"
import EmployeeGallery from "./EmployeeGallery";

type EmployeeInfoPropsT = {
    employee: EmployeeT
}

export default function EmployeeInfo({employee}: EmployeeInfoPropsT){


    return (
        <section className="emp-info">
            <div className="emp-info-rating">
                <div className="emp-info-rating-stars">
                    <p>4.00</p>
                    <RatingStars rate={4} />
                </div>
                <p>{employee.reviews.length} Reviews</p>
            </div>
            <div className="emp-info-portfolio">
                <p>{employee.name}'s Results Gallery</p>
                <EmployeeGallery gallery={employee.gallery}/>
            </div>
        </section>
    )
}