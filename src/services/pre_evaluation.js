import {Axios} from '@/network/axios'

export default class PreEvaulation{

    submitVehicleDetails = (data) => {
       return Axios.post('evals', data);
    }

    getVehicleBrands = () => {
        return Axios.get('brands');
    }

    getVehicleModel = (brand) => {
        return Axios.get(`brands/${brand}/models`)
    }

    getPolicies = () => {
        return Axios.get('new/policies');
    }

    mlValidate = (data) => {
        return Axios.post('validate/detect', data);
    }

    chosePolicy = (data) => {
        return Axios.post('policy/select', data);
    }

    getUserPolicyStatus = (email) => {
        return Axios.get(`user/${email}`);
    }
}