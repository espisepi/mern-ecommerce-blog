import axios from 'axios';

// const API_ROOT = '/api';
const API_ROOT = 'http://localhost:5000/api';

const requests = {
    get: (url) => axios.get(`${API_ROOT}${url}`),
    post: (url, body) => axios.post(`${API_ROOT}${url}`, body),
};

const products = {
    all: () => requests.get('/products'),
};

const users = {
    signin: (email, password) => requests.post('/users/signin',{ email, password }),
}

const agent = {
    products,
    users,
}
export default agent;