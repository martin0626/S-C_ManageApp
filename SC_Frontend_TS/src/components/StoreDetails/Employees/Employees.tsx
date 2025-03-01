import { FaChild } from "react-icons/fa"
import EmployeeInfo from "./EmployeeInfo"
import EmployeeSingleInfo from "./SingleEmployee"

type EmployeesProps = {
    images: string
}

export default function Employees({images}: EmployeesProps){
    return (
        <article className="emp-main">
            <section className="emp-list">
                <header className="emp-list-header">
                    <FaChild />
                    <h2>Our Team</h2>
                </header>
                <ul className="emp-list-main">
                    <EmployeeSingleInfo isActive={true}/>
                    <EmployeeSingleInfo isActive={false}/>
                    <EmployeeSingleInfo isActive={false}/>
                    <EmployeeSingleInfo isActive={false}/>
                </ul>
            </section>
            <EmployeeInfo/>
        </article>
    )
}