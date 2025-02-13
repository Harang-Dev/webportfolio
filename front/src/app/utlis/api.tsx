import axios from "axios";

const API = 'http://localhost:4000';

export const postDetail = async() => {
    const response = await axios.get(`${API}/post-detail`);
    return(response.data);
};