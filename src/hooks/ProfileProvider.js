import { useState, useEffect, createContext, useContext } from "react";
import { getUserData } from "../api/api";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log(token);
        if (token) {
            console.log("token exists");
            getUserData(token)
            .then((res) => {
                setUser(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.response);
            });
        }
    }, []);

    return (
        <ProfileContext.Provider value={{ user, loading }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => useContext(ProfileContext);