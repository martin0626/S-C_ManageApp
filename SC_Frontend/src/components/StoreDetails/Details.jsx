import SalonDescription from "./Description";
import Employees from "./Employees";
import Gallery from "./Gallery";
import LocationMap from "./LocationMap";
import Rating from "./SalonRating";
import Services from "./SalonServices";

export default function Details({salon}){
    return (
        <section className="storeDetails">
            <Gallery images={salon.gallery}/>
            <Services services={salon.services}/>
            <LocationMap locatin={salon.location}/>
            <SalonDescription salonNmae={salon.name} description={salon.description}/>
            <Rating rating={salon.rating}/>
            <Employees employees={salon.employees} />
        </section>
    )
}