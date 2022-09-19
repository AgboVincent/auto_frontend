<template>
    <div>
        <loading v-if="showLoading"/>
        <video ref="video" @canplay="initCanvas()"></video>
        <button @click="takePicture($event)">Take Picture</button>
        <canvas ref="canvas" style="display.none"/>
    </div>
</template>


<script>
import FileUpload from '@/services/img_upload.js';
import Loading from './Loading.vue';
export default {
    name: "CameraComponent",
    components: {Loading},
    props:['pictureType'],
    data(){
        return{
            video: null,
            canvas: null,
            fileUpload: new FileUpload(),
            showLoading:false
        }

    },
    methods: {
        startCapture(){
            navigator.mediaDevices.getUserMedia({
                video: true // {facingMode: { exact: 'environment' }} 
                , audio: false,

            }).then(stream => {
                this.video.srcObject = stream;
                this.video.play();
                console.log(window.stream);
            }).catch(err => {
                console.log(err);
            })
        },
        initCanvas(){
            this.canvas.setAttribute('width', this.video.videoWidth);
            this.canvas.setAttribute('height', this.video.videoHeight)
        },
        takePicture(){
            this.showLoading = true;
            let context = this.canvas.getContext('2d');
            context.drawImage(this.video, 0,0, this.video.videoWidth, this.video.videoHeight);
            console.log(this.pictureType)
        
            const url =  this.canvas.toDataURL('image/png');
            console.log(url);
            var formData = new FormData();
            fetch(url)
                .then(res => res.blob())
                .then(blob => {
                    console.log(blob)
                    formData.append("file", blob, "filename.jpg");
                    formData.append('id', localStorage.id);
                    formData.append('part', this.pictureType);
                    formData.append('type_id', 1);
                    this.fileUpload.uploadImage(formData)
                    .then(respones => {
                        console.log(respones);
                        if(this.pictureType == 'engine'){
                           this.$emit('valueEmit', 'imageUrl1');
                        }
                        if(this.pictureType == 'front'){
                           this.$emit('valueEmit', 'imageUrl2');
                        }
                        if(this.pictureType == 'rear'){
                           this.$emit('valueEmit', 'imageUrl3');
                        }
                        if(this.pictureType == 'right'){
                           this.$emit('valueEmit', 'imageUrl4');
                        }
                        if(this.pictureType == 'left'){
                           this.$emit('valueEmit', 'imageUrl5');
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(()=>{
                        this.showLoading = false;
                    });
                })
        }
    },
    mounted(){
        this.canvas = this.$refs.canvas;
        this.video = this.$refs.video;
        this.startCapture();
    }
}
</script>


<style scoped>

</style>