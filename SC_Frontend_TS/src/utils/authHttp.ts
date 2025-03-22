
const BASE_URL = 'http://localhost:3000/users/'

export const loginUser = async (email: string, password: string)=>{

    debugger

    const response = await fetch(BASE_URL + 'signIn', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    });

    if(!response.ok){
        throw new Error('Something Went Wrong!')
    }

    const data = await response.json();

    return data;
}