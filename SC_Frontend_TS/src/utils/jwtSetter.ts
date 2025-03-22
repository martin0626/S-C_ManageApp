export const clearToken = ()=>{
    window.localStorage.removeItem('jwt');
};

export const setToken = (token: string)=>{
    clearToken();
    window.localStorage.setItem('jwt', token);
};






