import axios from "axios"

export const instanceAxios = axios.create({
    baseURL: 'http://localhost:5005/',
    headers: {}
  });
  export const instanceAxiosAuthorization = axios.create({
    baseURL: 'http://hawas.runasp.net/api/v1/',
    headers: {}
  });



