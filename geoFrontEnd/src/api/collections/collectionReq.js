import axios from 'axios'

const BASE_URL = 'https://apigeo.onrender.com/api'

const axiosInstance = axios.create({baseURL : BASE_URL})


export const getAllCollections = async ()=>{
    return (await axiosInstance.get('collections')).data
}


export const getFilteredCollections = async (filterParams)=>{
    return (await axiosInstance.post('collections/filter' , filterParams)).data
}