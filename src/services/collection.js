import {Axios} from '@/network/axios'

export default class Collection{

    getAccidentTypes = () => {
        return Axios.get('accident/types');
    }

    
}