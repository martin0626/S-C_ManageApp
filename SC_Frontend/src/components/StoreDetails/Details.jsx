import SalonDescription from "./Description";
import Employees from "./Employees";
import Gallery from "./Gallery";
import LocationMap from "./LocationMap";
import Rating from "./SalonRating";
import Services from "./Services/SalonServices";

export default function Details({salon}){
    return (
        <section className="storeDetails">
            <Gallery images={salon.gallery}/>
            <Services services={salon.services} city={salon.city} address={'.к. Младост 4, бл. 408, вход откъм ул Петър Джидров'} name={salon.name} rating={salon.rating}/>
            <LocationMap locatin={salon.location}/>
            <SalonDescription salonNmae={salon.name} description={salon.description}/>
            <Rating rating={salon.rating}/>
            <Employees employees={salon.employees} />
        </section>
    )
}