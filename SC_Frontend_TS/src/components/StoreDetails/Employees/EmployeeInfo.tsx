import RatingStars from "../../UI/RatingStars"
import EmployeeGallery from "./EmployeeGallery";

export default function EmployeeInfo(){


    return (
        <section className="emp-info">
            <div className="emp-info-rating">
                <div className="emp-info-rating-stars">
                    <p>4.00</p>
                    <RatingStars rate={4} />
                </div>
                <p>30 Reviews</p>
            </div>
            <div className="emp-info-portfolio">
                <p>Results Gallery</p>
                <EmployeeGallery/>
            </div>
        </section>
    )
}