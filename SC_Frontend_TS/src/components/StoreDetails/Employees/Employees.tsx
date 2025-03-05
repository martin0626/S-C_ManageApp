import { FaChild } from "react-icons/fa"
import EmployeeInfo from "./EmployeeInfo"
import EmployeeSingleInfo from "./SingleEmployee"
import { type EmployeeT } from "../../../pages/Stores"
import { useState } from "react"


type EmployeesPropsT = {
    employees: EmployeeT []
}


export default function Employees({employees}: EmployeesPropsT){

    const [selectedEmp, setSelectedEmp] = useState<EmployeeT>(employees[0]);

    const handleSelectEmp = (id: string)=>{
        setSelectedEmp(employees.filter(e => e._id === id)[0]);
    }


    return (
        <article className="emp-main">
            <section className="emp-list">
                <header className="emp-list-header">
                    <FaChild />
                    <h2>Our Team</h2>
                </header>
                <ul className="emp-list-main">
                    {employees.map(e => {
                        if(selectedEmp._id === e._id){
                            return (
                                <>
                                    <EmployeeSingleInfo onSelectHandler={handleSelectEmp} employeeData={e} isActive={true}/>
                                    <div className="show-mobile-600">
                                        <EmployeeInfo employee={selectedEmp} />
                                    </div>
                                </>
                            )
                        }else{
                            return <EmployeeSingleInfo onSelectHandler={handleSelectEmp} employeeData={e} isActive={false}/>
                        }
                    })}
                </ul>
            </section>
            <div className="show-bigger-600">
                <EmployeeInfo employee={selectedEmp} />
            </div>
        </article>
    )
}