import { useAuthContext } from "./useAuthContext";
import {useKeeperContext} from './useKeeperContext'

// to do logout
export const useLogout =()=>{

    // from reducer
    const {dispatch} = useAuthContext();

    // here the dispatch name is change ti keeperDispatch because dispatch already exist above 
    const {dispatch : keeperDispatch} = useKeeperContext()

    const logout = ()=>{
        // remove the stored user info from browser localStorage
        localStorage.removeItem('user');
        // dispatch type logout
        dispatch({type : 'LOGOUT'})
        //clearing all keeper
        keeperDispatch({ type: 'SET_KEEPER' , payload : null})
    }
    return {logout}
}