<template>
    <div  id="main_container">
        <video id="video" ref="video"  playsinline autoplay loop> Can't load video :(</video>
        <button id="btn-record" @click="takeVideo()">{{btnText}}</button>
    </div>
</template>


<script>
import FileUpload from '@/services/img_upload.js';
export default {
    name: "VideoComponent",
    components: {},
    data(){
        return{
            video: null,
            videoUrl: null,
            fileUpload: new FileUpload(),
            cameraStream: null,
            mediaRecorder: null,
            blobsRecorded: [],
            btnText: null
        }

    },
    methods: {
        startCapture(){
            navigator.mediaDevices.getUserMedia({
                video: true // {facingMode: { exact: 'environment' }} 
                , audio: false,

            }).then(stream => {
                this.video.srcObject = stream;
                window.stream = stream;
            }).catch(err => {
                console.log(err);
            })
        },
        takeVideo(){
            switch(this.btnText){
               case "Record":
                   this.btnText = "Stop";
                   this.startRecording();
                   break;
               case "Stop":
                   this.btnText = "Record";
                   this.stopRecording();
                   break;   
            }
        },

        startRecording(){
            if(this.video.srcObject == null){
                this.video.srcObject = window.stream;
            }
            this.mediaRecorder = new MediaRecorder(window.stream, {mimeType: 'video/webm;codecs=vp9,opus'});
            this.mediaRecorder.start();
            this.mediaRecorder.ondataavailable = this.recordVideo;          
        },

        recordVideo(event){
            if(event.data && event.data.size > 0){
                this.video.srcObject = null;
                this.videoUrl = URL.createObjectURL(event.data);
                this.video.src = this.videoUrl;
                console.log(this.videoUrl);
            }
        },

        stopRecording(){
            this.mediaRecorder.stop();
            const file = new File([this.videoUrl], "video",{ type: "video/mp4" });
            console.log(file);
            this.$emit('valueEmit', 'video');
            this.fileUpload.uploadImage(file)
            .then(respones => {
                console.log(respones);
            })
            .catch(err => {
                console.log(err);
            });
        }

    },
    mounted(){
        this.video = this.$refs.video;
        this.startCapture();
        this.btnText = "Record"
    }
}
</script>


<style scoped>
 #main_container{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 80vh;
 }
 #video{
    max-width: 300px;
 }
 #btn-record{
     background-color: azure;
     height: 60px;
     width: 60px;
     border-radius: 50%;
     text-align: center;
     line-height: 50px;
     font-size: .75em;
     transition-property: box-shadow;
     transition-duration: .3s;
     border: 0;
 }
</style>