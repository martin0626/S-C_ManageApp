export function checkEmail(input: string){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(input)){
        return '';
    }else{ 
        return 'Invalid Email!'
    }
}
