import Stores from "../components/Stores/Stores";

export type TSingleStore = {
    _id: string;
    name: string;
    slug: string;
    description: string;
    services: ('barber' | 'nails') [];
    employees: string [];
    coverImg: string;
    gallery: string [];
    rating: number
    city: string;
    country: string;
    location: string;
}


export default function StoresPage(){
    return (
        <Stores/>
    )
}