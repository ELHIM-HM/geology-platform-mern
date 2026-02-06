import axios from 'axios'

const BASE_URL = 'https://apigeo.onrender.com/api'

const axiosInstance = axios.create({baseURL : BASE_URL})


export const getEvents = async ()=>{
    return (await axiosInstance.get('events')).data
}


