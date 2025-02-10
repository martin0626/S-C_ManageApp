import Stores from "../components/Stores/Stores";

export type SingleServiceT = {
    category: 'hair' | 'face' | 'body' | 'nails',
    gallery: string [],
    name: string,
    price: number,
    reviews: string [],
    type: string,
    _id: string
}



export type TSingleStore = {
    _id: string;
    name: string;
    slug: string;
    description: string;
    services: SingleServiceT [];
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