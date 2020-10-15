import axios from 'axios';

// const API_ROOT = '/api';
const API_ROOT = 'http://localhost:5000/api';

const requests = {
    get: (url) => axios.get(`${API_ROOT}${url}`),
    post: (url, body) => axios.post(`${API_ROOT}${url}`, body),
    put: (url, body, headers) => axios.put(`${API_ROOT}${url}`, body, headers),
};

const products = {
    all: () => requests.get('/products'),
    search: (category, searchKeyword, sortOrder) =>
        requests.get('/products?category=' +
        category +
        '&searchKeyword=' +
        searchKeyword +
        '&sortOrder=' +
        sortOrder),
    
};

const users = {
    signin: (email, password) => requests.post('/users/signin',{ email, password }),
    update: (userId, name, email, password, token) => requests.put('/users/' + userId, {name, email, password}, { headers:{Authorization: 'Bearer ' + token} } )
}

const agent = {
    products,
    users,
}
export default agent;