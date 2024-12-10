export default function AuthInput({label, name, type}){
    return(
        <div className="input-cont">
            <label htmlFor={name}></label>
            <input type={type} name={name} />
        </div>
    )
}