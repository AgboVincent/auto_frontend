import {Axios} from '@/network/axios'
const url = "";
export default class MlService{
   
    detect = (data) => {
       return Axios.post(`${url}/detect`, data);
    }

} 