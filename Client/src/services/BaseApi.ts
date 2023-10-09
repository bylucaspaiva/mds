import axios from 'axios';

const BaseApi = axios.create({
  baseURL: "https://localhost:7151"
})

export default BaseApi;