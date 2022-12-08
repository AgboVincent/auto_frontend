<template>
    <div>
        <loading v-if="showLoading"/>
        <div v-else-if="openCamera">
            <camera-component :pictureType="'claims'" @valueEmit="valEmit=$event"></camera-component>
        </div>
        <div v-else-if="openVideo">
            <video-component :video="video" :type="'claims'" @valueEmit="valEmit=$event"></video-component>
        </div>
        <div v-else>
            <header-component title="Insurance Claims"></header-component>
                <div class="col">
                    <back-button></back-button>
                    <page-description title="Upload damaged file part"
                                    subtitle="Follow instructions below to upload your files">
                    </page-description>
                    <b-card class="card-style mb-3"  @click="openVideo = true">
                            <div class="row px-3">
                                <input v-model="videoUrl" class=" mr-3" type="checkbox" aria-label="Checkbox for following text input">
                                <span :class="`${videoUrl ? 'line-stroke' : ''}`">Video recording of the damaged part</span>
                            </div>
                        </b-card>
                        <b-card class="card-style mb-3" @click="openCameraFunc()">
                            <div class="row px-3">
                                <input v-model="image.imageUrl" class=" mr-3" type="checkbox" aria-label="Checkbox for following text input">
                                <span :class="`${image.imageUrl ? 'line-stroke' : ''}`">Upload image of the damaged part</span>
                            </div>
                        </b-card>
                        <br>
                        <h5 v-if="uploads.length < 4" @click="openCamera = true" class=" view d-flex align-items-start">Upload another image</h5>
                        <custom-button type="submit" title="Continue" @click="nextPage"></custom-button>
                </div>
        </div>
    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import CustomButton from "@/components/CustomButton.vue";
import CameraComponent from "@/components/Camera.vue";
import VideoComponent from "@/components/Video.vue";
import Loading from '@/components/PredictionLoader.vue';
import {showSuccess, showError} from "@/helpers/alerts";
import Collection from '@/services/collection.js';
import MlService from "@/services/ml.js"
export default {
    name: "CollectionsUploads",
    components: {
        HeaderComponent,
        BackButton,
        PageDescription,
        CustomButton,
        CameraComponent,
        VideoComponent,
        Loading
    },
    data() {
        return {
            image: {},
            videoUrl: null,
            openCamera: false,
            openVideo: false,
            showLoading: false,
            video: null, 
            valEmit: null,
            collection: new Collection(),
            uploads: [],
            mlService: new MlService(),
            path: null,
            url: null
        }
    },
    watch: {
        valEmit() {
            this.handleEmits();
        },
    },
    methods: {
        openCameraFunc(){
            if(this.uploads.length === 4){
                showSuccess('You cannot upload more than four images') 
                return;
            } 
            this.openCamera = true;
        },
        handleEmits() {
            if(this.valEmit.image == 'image'){
                this.image.imageUrl = true;
                this.openCamera = false;   
                this.path = this.valEmit.url
                this.url =  this.mlService.s3Url+this.path;
                this.uploads.push(this.url)
                localStorage.setItem('imageClaims', JSON.stringify(this.image.imageUrl));
                this.valEmit = {}; 
                showSuccess('image Uploaded successfull') 
            }
            
            else if(this.valEmit == "video"){
                this.videoUrl = true;
                localStorage.setItem('videoUrlClaims', JSON.stringify(this.videoUrl));
                this.openVideo = false;
                this.valEmit = {};  
            }
        },
        nextPage(){
            if(this.image.imageUrl == false || this.videoUrl == false)return;
            this.validateUploads();
        },
        validateUploads() {
            let data = {}
            
            for(let i = 0; i < this.uploads.length; i++){
                data["image_data" + (i+1)] = this.uploads[i];
            }
          
            this.showLoading = true;
            this.collection.mlValidateSingleUpload(data)
                .then(response =>{
                    console.log(response.data);
                    let isAutomobile = false;
                    for(let i = 0; i<response.data.length; i++){
                    if(response.data[i]['is_expected_automobile'] == false){
                        isAutomobile = true;
                        showError('Error', "You have uploaded an image that is not a vehicle, Please retake images");
                        break;
                    }
                }
                if(isAutomobile === true) return;
                    this.mlDetection(response.data);
                })
                .catch(e => {
                    console.log(e)
                })
                .finally(()=>{
                    this.showLoading = false;
                });
            
        },
        mlDetection(data){
            let output = []
            for(let i = 0; i < data.length; i++){
               let results = data[i].damaged_parts.Detected_damages;
               output.push(results);
            }
            this.$router.push({ name: 'damageDetection', 
                params: {
                    ml: output
                }
            })
        }
    },
    mounted(){
        if(localStorage.getItem('imageClaims')){
           this.image.imageUrl = JSON.parse(localStorage.getItem('imageClaims'));
        }
        if(localStorage.getItem('videoUrlClaims')){
           this.videoUrl = JSON.parse(localStorage.getItem('videoUrlClaims'));
        }
    }
}
</script>


<style scoped>
.view{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-decoration-line: underline;
    color: #1A1AFF;
}
.line-stroke {
    text-decoration: line-through;
}
</style>