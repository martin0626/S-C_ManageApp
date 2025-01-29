type SalonDescription = {
    name: string;
    description: string;
}


export default function SalonDescription({name, description}: SalonDescription){
    return (
        <div>
            <h1>{name} {description}</h1>
        </div>
    )
}