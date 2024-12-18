import { FaTriangleExclamation } from "react-icons/fa6";

export default function ErrorBox({err}){

    return (
        <div className="errBox">
            <div>
                <h2><FaTriangleExclamation/></h2>
                <h1>Something went wrong!</h1>
                <p>( {err.message} )</p>
            </div>
            <p>Please try again later...</p>
        </div>
    )
}