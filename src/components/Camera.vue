<template>
    <div>
        <video ref="video" @canplay="initCanvas()"></video>
        <button @click="takePicture()">Take Picture</button>
        <canvas ref="canvas" style="display.none"/>
    </div>
</template>


<script>
export default {
    name: "CameraComponent",
    components: {},
    data(){
        return{
            video: null,
            canvas: null
        }

    },
    methods: {
        startCapture(){
            navigator.mediaDevices.getUserMedia({
                video:{facingMode: { exact: 'environment' }} , audio: false,
                //constraints: {facingMode: { exact: 'environment' }} 
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
            this.$emit('picture-taken', this.canvas.toDataURL('image/png'))

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