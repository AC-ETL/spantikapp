import React ,{createContext, useState, useEffect} from "react";
import { storeData, getData , removeData } from "../utilities/asyn_storage";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userToken , setUserToken] = useState('');
    const [userId ,  setUserId] =  useState('');
    const [userName, setUserName]= useState('');
    const [phoneNumber, setPhoneNumber] = useState();
    const [trigger, setTrigger] = useState(true);

    const triggerAuthEffect = () => {
        if (trigger == true) {
          setTrigger(false);
        } else if (trigger == false) {
          setTrigger(true);
        }
    }

    const checkTokenExist = async() =>{
        const token = await getData("jwt");
        const idtoken = await getData("userId");
        const nameToken = await getData("userName");
        const phoneToken = await getData("phoneNumber");
        setUserToken(token);
        setUserId(idtoken);
        setUserName(nameToken);
        setPhoneNumber(phoneToken);
    }

    useEffect(()=> { 
        checkTokenExist();
    },[trigger]);

    

    return (
        <AuthContext.Provider value={{ userToken , userId , userName, phoneNumber , checkTokenExist , triggerAuthEffect }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;