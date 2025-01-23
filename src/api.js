import axios from 'axios';

const dummy = axios.create({
  baseURL: 'https://dummyjson.com',
});

const author = axios.create({
  baseURL: 'https://app.shawon-khan.com/api',
  headers: {
    'X-API-Key': 'sk-portfolio',
    'Author': 'Shawon Khan',
  },
});

export default {dummy, author};
