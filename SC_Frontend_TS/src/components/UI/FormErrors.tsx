import { ErrorObjT } from "../../types/globalTypes";


type formErrorsPropsT = {
    errors: [] | ErrorObjT []
} 

export default function FormsError({errors}: formErrorsPropsT){


    return (
        <article className="errorsForm-container">
            {
                errors.length > 0 && <>
                    
                    <ul className="formErrors">
                        <h4>Please Check:</h4>
                        {errors.map(e =>{
                            return <li>{Object.keys(e)[0]}: {e[Object.keys(e)[0]]}</li>
                        })}
                    </ul>
                </>
            }
        </article>
    )
}