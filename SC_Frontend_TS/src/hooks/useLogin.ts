import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "./reduxHooks";
import { getSingleUserData } from "../utils/authHttp";
import { authActions } from "../store/auth-slice";

export default function useLoginUser(jwt: string):{isError: boolean, error: string, success: boolean}{
    const dispatch = useAppDispatch();
    
    const hookData = {
        isError: false,
        error: '',
        success: false,
    }

    const {data, isError, error} = useQuery({
        queryKey: ['authorization'],
        queryFn: () => getSingleUserData(jwt),
    })

    if(isError){
        hookData.isError = true;
        hookData.error = error.message;
    }

    if(data){
        dispatch(authActions.login(data.user))
        hookData.success = true
    }

    return hookData;
}