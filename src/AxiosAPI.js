import axios from 'axios';

const AxiosApi = axios.create({
    baseURL: 'https://restoran-2-2ebd6-default-rtdb.europe-west1.firebasedatabase.app'
});

export default AxiosApi;