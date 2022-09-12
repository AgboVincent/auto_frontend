<template>
    <div>
        <div v-if="openCamera">
            <camera-component :pictureType="pictureType" @valueEmit="valEmit=$event"></camera-component>
        </div>
        <div v-else-if="openVideo">
            <video-component :video="video" @valueEmit="valEmit=$event"></video-component>
        </div>
        <div v-else>
            <header-component title="Vehicle Inspection"></header-component>
            <div class="col">
                <back-button></back-button>
                <b-card class="card-style mb-3"  @click="openVideo = true">
                    <div class="row px-3">
                        <input v-model="videoUrl" class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <h6>Video recording of your vehicle</h6>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('engine')">
                    <div class="row px-3">
                        <input v-model="imageUrl1" class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <h6>Capture your Engine</h6>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('front')">
                    <div class="row px-3">
                        <input v-model="imageUrl2" class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <h6>Capture the front view of your vehicle</h6>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('rear')">
                    <div class="row px-3">
                        <input v-model="imageUrl3" class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <h6>Capture the rear view of your vehicle</h6>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('right')">
                    <div class="row px-3">
                        <input v-model="imageUrl4" class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <h6>Capture the right side of your vehicle</h6>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('left')">
                    <div class="row px-3">
                        <input v-model="imageUrl5" class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <h6>Capture the left side of your vehicle</h6>
                    </div>
                </b-card>
                <custom-button @click="$router.push('/inspectionReport').catch(() => {})" title="Continue"></custom-button> 

            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import CustomButton from "@/components/CustomButton.vue";
import BackButton from "@/components/BackButton.vue";
import CameraComponent from "@/components/Camera.vue";
import VideoComponent from "@/components/Video.vue";
export default {
    name: "UploadOptions",
    components: {
        HeaderComponent,
        CustomButton,
        BackButton,
        CameraComponent,
        VideoComponent
    },
    data(){
        return{
            openCamera: false,
            openVideo: false,
            imageUrl1: false,
            imageUrl2: null,
            imageUrl3: null,
            imageUrl4: null,
            imageUrl5: null,
            videoUrl: null,
            valEmit: null,
            pictureType: null,
            video: null
        }
    },
    watch: {
        valEmit() {
            this.handleEmits();
        },
    },
    methods: {
        handleEmits() {
            console.log(this.valEmit)
            if(this.valEmit == "imageUrl1"){
                this.imageUrl1 = true;
                this.openCamera = false;
            }
            else if(this.valEmit == "imageUrl2"){
                this.imageUrl2 = true;
                this.openCamera = false;
            }
             else if(this.valEmit == "imageUrl3"){
                this.imageUrl3 = true;
                this.openCamera = false;
            }
             else if(this.valEmit == "imageUrl4"){
                this.imageUrl4 = true;
                this.openCamera = false;
            }
             else if(this.valEmit == "imageUrl5"){
                this.imageUrl5 = true;
                this.openCamera = false;
            }
            else if(this.valEmit == "video"){
                this.videoUrl = true;
                this.openVideo = false;
                this.valEmit = null;
            }
        },
        handleType(type){
            this.openCamera = true;
            this.pictureType = type;
            this.valEmit = null;
        }
    
    },
    
}
</script>

<style scoped>
.card-style{
    height:60px;
    border: 1;
    background: #FFFFFF;
}
</style>