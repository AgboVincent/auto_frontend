import {Axios} from '@/network/axios'

export default class PreEvaulation{

    submitVehicleDetails = (data) => {
       return Axios.post('api/evals', data);
    }

    getVehicleBrands = () => {
        return Axios.get('api/brands');
    }

    getVehicleModel = (brand) => {
        return Axios.get(`api/brands/${brand}/models`)
    }
}