import axios from 'axios';

// const API_ROOT = '/api';
const API_ROOT = 'http://localhost:5000/api';

const requests = {
    get: (url) => axios.get(`${API_ROOT}${url}`),
};

const products = {
    all: () => requests.get('/products'),
};

const agent = {
    products,
}
export default agent;