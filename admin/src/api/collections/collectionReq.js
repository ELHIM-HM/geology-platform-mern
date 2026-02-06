import axios from 'axios'

const BASE_URL = 'https://apigeo.onrender.com/api'

const axiosInstance = axios.create({baseURL : BASE_URL})


export const getAllCollections = async ()=>{
    return (await axiosInstance.get('collections')).data
}

export const getCollection = async (id)=>{
    return (await axiosInstance.get(`collections/${id}`)).data
}

export const deleteCollection = async (id) =>{
    return (await axiosInstance.delete(`collections/${id}`)).data
}

export const createCollection = async (formData)=>{
    return (await axiosInstance.post('collections' , formData)).data
}

export const updateCollection = async (id ,  data)=>{

    return (await axiosInstance.put(`collections/${id}` , data)).data
}


