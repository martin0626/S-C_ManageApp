export default function Details({salon}){
    return (
        <div>
            <h1>{salon.name}</h1>
            <h1>{salon.description}</h1>
            <img src={salon.coverImg} alt="cover IMG" />
        </div>
    )
}