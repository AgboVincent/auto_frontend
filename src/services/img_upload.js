import {Axios} from '@/network/axios'

export default class FileUpload{

    uploadImage = (file) => {
       return Axios.post('file/uploads', file);
    }

    updateData = (data) => {
        let sortData = [];
        data.forEach(element => {
            let path = element.image_url.replace('https://autoclaims.s3.us-east-2.amazonaws.com/', '');
            sortData.push(
                {path:path,result: element.Severity}
            );
        });
        console.log(sortData);
        return Axios.put('result', array);
     }

} 