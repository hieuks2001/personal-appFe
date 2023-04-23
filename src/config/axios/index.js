import axios from "axios"

// const port = 7116;
const port = JSON.parse(localStorage.getItem("port"));
let BASE_URL = "https://localhost:"+port+"/api"

axios.defaults.baseURL = `${BASE_URL}`

export const configAxios = () => {  
   
}