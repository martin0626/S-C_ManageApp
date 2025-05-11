import { useAppSelector } from "../../hooks/reduxHooks"

export default function AppointmentsComp(){
    const services = useAppSelector(state => state.services.selectedServices);


    return (
        <div>
            <h1>Work</h1>
            { Object.keys(services).map(e => {
                return <h2>{e}</h2>
            })}
        </div>
    )
}