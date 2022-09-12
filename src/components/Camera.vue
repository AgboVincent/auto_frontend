<template>
    <div>
        <video ref="video" @canplay="initCanvas()"></video>
        <button @click="takePicture($event)">Take Picture</button>
        <canvas ref="canvas" style="display.none"/>
    </div>
</template>


<script>
import FileUpload from '@/services/img_upload.js';
export default {
    name: "CameraComponent",
    components: {},
    props:['pictureType'],
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
            let context = this.canvas.getContext('2d');
            context.drawImage(this.video, 0,0, this.video.videoWidth, this.video.videoHeight);
            console.log(this.pictureType)
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
            //console.log(this.canvas.toDataURL('image/png'));
            const url =  this.canvas.toDataURL('image/png');
            console.log(url);
            var formData = new FormData();
            fetch(url)
                .then(res => res.blob())
                .then(blob => {
                    const file = new File([blob], "file",{ type: "image/png" });
                    const url = URL.createObjectURL(file)
                    formData.append("file", blob, "filename.jpg");
                    console.log(url);
                    
                    this.fileUpload.uploadImage(formData)
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