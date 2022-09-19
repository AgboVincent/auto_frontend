import {Axios} from '@/network/axios'

export default class FileUpload{

    uploadImage = (file) => {
       return Axios.post('file/uploads', file);
    }

} 