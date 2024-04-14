import { createContext, useState } from "react";

 export const Usercontext=createContext();

const UsercontextProvider=({children})=>{
    const data={
        _id:'',
        name:'',
        email:'',
        mobileNumber:'',
        
        deliveryAddress:'',
        
        

    }
    const [user,setuser]=useState(data);
    const [Products,setProducts]=useState([]);


    return(
        <Usercontext.Provider value={{user,setuser,Products,setProducts}}>
            {children}
        </Usercontext.Provider>
    )
}

export default UsercontextProvider;