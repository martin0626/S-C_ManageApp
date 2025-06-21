const BASE_URL = 'http://localhost:3000/users/'

type loginDataT = {
    email: string;
    password: string
}

type registerDataT = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

const authFetch = async(url:string, data: loginDataT | registerDataT)=>{
    const response = await fetch(url, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    return response;
}


export const loginUser = async(data: loginDataT)=>{

    const response = await authFetch(BASE_URL + 'signIn', data);

    if(!response.ok){
        const errorBody = await response.json();
        throw new Error(errorBody.message || 'Something went wrong');
    }

    const responseData = await response.json();

    
    return responseData;
}


export const registerUser = async (data: registerDataT)=>{

    const response = await authFetch(BASE_URL + 'signUp', data);

    if(!response.ok){
        const errorBody = await response.json();
        throw new Error(errorBody.message || 'Something went wrong');
    }
    const responseData = await response.json();
    return responseData;
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