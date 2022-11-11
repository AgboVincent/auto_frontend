import {Axios} from '@/network/axios'

export default class Collection{

    getAccidentTypes = () => {
        return Axios.get('accident/types');
    }

    uploadClaims = (fileData) => {
        return Axios.post('upload/claims', fileData);
    }

    submitClaims = (claimsData) => {
        return Axios.post('submit/claims', claimsData);
    }

    
}