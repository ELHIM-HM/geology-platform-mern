import axios from 'axios'
const BASE_URL = 'https://apigeo.onrender.com/api'

const axiosInstance = axios.create({ baseURL: BASE_URL })

// users is the api end points (http://localhost:3000/api/users)

export const getUsers = async () => {
  return (await axiosInstance.get('users'))
    .data
}

export const createUser = async (user ) =>{
    await axiosInstance.post('users' , user)
}
