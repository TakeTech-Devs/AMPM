import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.unleashedsoftware.com/', // Correct base URL
    headers: {

        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

export default instance;