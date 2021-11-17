import axios, { Axios } from "axios";

export const API = axios.create({
    baseURL:"https://api.quotable.io/"
})
export const searchApi = axios.create({
    baseURL:"https://newsapi.org/v2/"
})
export const publicApi = axios.create({
    baseURL:"https://api.publicapis.org/"
})

