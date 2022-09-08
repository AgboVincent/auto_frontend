<template>
    <div>
        <video ref="video" @canplay="initCanvas()"></video>
        <button @click="takePicture()">Take Picture</button>
        <canvas ref="canvas" style="display.none"/>
    </div>
</template>


<script>
import FileUpload from '@/services/img_upload.js';
export default {
    name: "CameraComponent",
    components: {},
    data(){
        return{
            video: null,
            canvas: null,
            fileUpload: new FileUpload()
        }

    },
    methods: {
        startCapture(){
            navigator.mediaDevices.getUserMedia({
                video:  {facingMode: { exact: 'environment' }} 
                , audio: false,

            }).then(stream => {
                this.video.srcObject = stream;
                this.video.play();
            }).catch(err => {
                console.log(err);
            })
        },
        initCanvas(){
            this.canvas.setAttribute('width', this.video.videoWidth);
            this.canvas.setAttribute('height', this.video.videoHeight)
        },
        takePicture(){
            let context = this.canvas.getContext('2d');
            context.drawImage(this.video, 0,0, this.video.videoWidth, this.video.videoHeight);
            this.$emit('picture-taken', this.canvas.toDataURL('image/png'));
            //console.log(this.canvas.toDataURL('image/png'));
            const url =  this.canvas.toDataURL('image/png');
            fetch(url)
                .then(res => res.blob())
                .then(blob => {
                    const file = new File([blob], "picture.jpg",{ type: "image/png" });
                
                    this.fileUpload.uploadImage(URL.createObjectURL(file))
                    .then(respones => {
                        console.log(respones);
                    })
                    .catch(err => {
                        console.log(err);
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