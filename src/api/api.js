import axios from "axios";

export function VerifyToken (token) {
    const config = {
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/token`,
        headers: {
            authorization: `Bearer ${token}`,
        }
    };

    return axios(config)
} 

export function getUserData(token){
    return axios.get(`${process.env.REACT_APP_API_URL}/user`,{
        headers: {
            authorization: `Bearer ${token}`,
        }
    });
}

export function getUsers(){
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`);
}

export function deleteUser(id){
    return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/deleteUser/`,{
        data: {
            id: id
        }
    });
}
export function updateUser(id, user){
    return axios.put(`${process.env.REACT_APP_BACKEND_URL}/updateUser/${id}`, user);
}