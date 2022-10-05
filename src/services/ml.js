import axios from 'axios';

const validatorUrl = "https://auto-service.sjeq6kb6jh0oc.us-east-2.cs.amazonlightsail.com/";
let headers = {
    "Content-Type":"application/json"
}
const Axios = axios.create({
    baseURL: validatorUrl,
    headers: headers        
})


export default class MlService{

     s3Url = "https://autoclaims.s3.us-east-2.amazonaws.com/";
    
    detect = (data) => {
       return Axios.post('auto-claim/validate-detect',data);
    }
} 