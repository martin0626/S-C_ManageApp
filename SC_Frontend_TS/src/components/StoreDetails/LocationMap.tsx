import { FaMapMarkerAlt } from "react-icons/fa";
import MapComponent from "../UI/Map";


type LocatiomProps = {
    location: string;
    name: string;
    city: string;
    country: string;
}


export default function LocationMap({location, name, country, city}: LocatiomProps){

    return (
        <section className="locationDetails">
            <header className="locationDetails-header">
                <div className="locationDetails-header-detail"></div>

                <div className="location-desc">
                    <h1><FaMapMarkerAlt/> Address</h1>

                    <div className="location-desc-text">
                        <p>{name}</p>
                        <p>Sofia, Mladost 4, bl.Aleksandar Malinov</p>
                        <p>{city}, {country}</p>
                    </div>
                </div>
            </header>
            <MapComponent location={[42.62862607082877, 23.3837770628687]} height={380}/>
        </section>
    )
}