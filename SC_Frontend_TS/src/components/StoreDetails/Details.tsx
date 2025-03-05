import { type TSingleStore } from "../../pages/Stores";
import SalonDescription from "./Description";
import Employees from "./Employees/Employees";
import Gallery from "./Gallery";
import LocationMap from "./LocationMap";
import Rating from "./SalonRating";
import Services from "./Services/SalonServices";


type DetailsProps = {
    salon: TSingleStore;
}

export default function Details({salon}: DetailsProps){
    return (
        <section className="storeDetails">
            <Gallery images={salon.gallery}/>
            <Services services={salon.services} city={salon.city} address={'.к. Младост 4, бл. 408, вход откъм ул Петър Джидров'} name={salon.name} rating={salon.rating}/>
            <LocationMap location={salon.location} name={salon.name} country={salon.country} city={salon.city} />
            <SalonDescription name={salon.name} description={salon.description}/>
            <Rating rating={salon.rating}/>
            <Employees employees={salon.employees} />
        </section>
    )
}