import {Axios} from '@/network/axios'

export default class FileUpload{

    uploadImage = (file) => {
        //console.log(file)
       return Axios.post('uploads', file);
    }
}