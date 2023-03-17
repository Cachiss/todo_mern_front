import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { VerifyToken } from "../api/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            VerifyToken(token)
            .then((res) => {
                console.log('auth success');
                setToken(token);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );  
};

