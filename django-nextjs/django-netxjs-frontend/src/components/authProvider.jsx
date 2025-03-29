"use client"

// const { createContext, useContext } = require("react");
// // const { createContext, useContext, useState } = require("react");
// const AuthContext = createContext(null);

// //  this for ckeking the authentication true
// export function AuthProvider({childern}){
//     // const [isAuthenticated, setIsAuthenticated] = useState(false)
//     const isAuthenticated = true

//     // const login = () => {
//     //     setIsAuthenticated(true)
//     // }
//     // const logout = () => {
//     //     setIsAuthenticated(true)
//     // }

//     // return <AuthContext.Provider value={{isAuthenticated, login, logout}}>
//     return <AuthContext.Provider value={{isAuthenticated}}>
//         {childern}
//     </AuthContext.Provider>
// }

// export function useAuth(){
//     return useContext(AuthContext)
// }


// from https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5 
import { useContext, createContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};

// authProvider is not a safeway, use middleware.