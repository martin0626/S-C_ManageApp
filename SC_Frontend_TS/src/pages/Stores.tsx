import Stores from "../components/Stores/Stores";

export type EmployeeT = {
    _id: string,
    name: string,
    title: string,
    reviews: string [],
    gallery: string []
}

export type SubServiceT = {
    _id: string,
    name: string,
    price: number,
    geallery: string [],
    reviews: string [],
    options: string [],
    time: number
}


export type SingleServiceT = {
    category: 'hair' | 'face' | 'body' | 'nails',
    gallery: string [],
    name: string,
    price: number,
    reviews: string [],
    subServices: SubServiceT[],
    type: string,
    _id: string
}


export type TSingleStore = {
    _id: string;
    name: string;
    slug: string;
    description: string;
    services: SingleServiceT [];
    employees: EmployeeT [];
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