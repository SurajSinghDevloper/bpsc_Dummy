import axios from "axios";

const RouteTo = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export default RouteTo;