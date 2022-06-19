import React,{useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout:() =>{},
    onlogin: (email,password) => {}
});
export const AuthContextProvider = (props) =>{
   
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   const logoutHandler = () =>{
    setIsLoggedIn(false);
   };

   const loginHandler = () =>{
    setIsLoggedIn(true);
   }
   
   
   return (
    <AuthContextProvider
        value={{ 
            isLoggedIn: isLoggedIn, 
            onLogout: logoutHandler,
            onlogin: loginHandler,
        }}
   >
        {props.children}
    </AuthContextProvider>
   );
}

export default AuthContext;