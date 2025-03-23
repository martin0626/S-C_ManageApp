export const clearToken = ()=>{
    window.localStorage.removeItem('jwt');
};

export const setToken = (token: string)=>{
    clearToken();
    window.localStorage.setItem('jwt', token);
};


export const getToken = ()=>{
    return window.localStorage.getItem('jwt');
}






