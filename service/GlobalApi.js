import { default as axios } from 'axios';


const API_KEY = import.meta.env.VITE_STRAPI_API_KEY

const axiosClient = axios.create({
    baseURL:'http://localhost:1337/api/',
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})
const CreateNewResume = (data) => axiosClient.post('/user-resumes',data)
const GetUserResumes = (useremail)=>axiosClient.get('/user-resumes?filters[useremail][$eql]='+useremail);

export default{
    CreateNewResume,
    GetUserResumes
}