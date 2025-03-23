const BASE_URL = 'http://localhost:3000/users/'

export const loginUser = async (email: string, password: string)=>{

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


export const getSingleUserData = async (jwt: string)=>{
    const response = await fetch(BASE_URL + 'SingleUser', {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${jwt}`
        }
    })

    if(!response.ok){
        throw new Error('This user is not found or Token was invalid!')
    }

    const data = await response.json();

    return data;
}