import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

type SalonDescription = {
    name: string;
    description: string;
}


export default function SalonDescription({name, description}: SalonDescription){
    return (
        <article className="details-description">
            <section className="details-description-text">
                <h2><FaMapMarkerAlt/> About {name}</h2>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quos consequuntur alias, vel, esse culpa non provident perspiciatis repudiandae dolorem assumenda minus. Architecto tempora porro dolorem. Nam quos exercitationem minima.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias natus dolorum quae beatae quis exercitationem nemo amet ab tenetur, provident debitis nobis tempora suscipit eum. Illum animi eaque quam?
                </div>
            </section>
            <section className="details-description-time">
                <h2><FaCalendarAlt /> Work time</h2>
                <ul className="details-description-time-list">
                    <li>
                        <span>Monday</span>
                        <span>08:00 - 20:00</span>
                    </li>
                    <li>
                        <span>Tuesday</span>
                        <span>08:00 - 20:00</span>
                    </li>
                    <li>
                        <span>Wednsday</span>
                        <span>08:00 - 20:00</span>
                    </li>
                    <li>
                        <span>Thursday</span>
                        <span>08:00 - 20:00</span>
                    </li>
                    <li>
                        <span>Friday</span>
                        <span>08:00 - 20:00</span>
                    </li>
                    <li>
                        <span>Satuday</span>
                        <span>08:00 - 20:00</span>
                    </li>
                    <li>
                        <span>Friday</span>
                        <span>Holiday</span>
                    </li>
                </ul>
            </section>
        </article>
    )
}