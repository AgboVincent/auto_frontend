import {Axios} from '@/network/axios'

export default class Collection{

    getAccidentTypes = () => {
        return Axios.get('accident/types');
    }

    uploadClaims = (fileData) => {
        return Axios.post('upload/claims', fileData);
    }

    submitClaims = (claimsData, quotes) => {
        if(this.addQuotes(quotes))
        return Axios.post('submit/claims', claimsData);
    }

    addQuotes = (quotes) => {
       let quoteData = {
            id: localStorage.id,
            quotes: quotes
        }
        return Axios.post('add/quotes', quoteData);
    }
}