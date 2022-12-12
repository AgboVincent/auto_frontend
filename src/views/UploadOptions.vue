<template>
    <div>
        <loading v-if="showLoading"/>
        <div v-else-if="openCamera">
            <camera-component :pictureType="pictureType" @valueEmit="valEmit=$event"></camera-component>
        </div>
        <div v-else-if="openVideo">
            <video-component :video="video" @valueEmit="valEmit=$event"></video-component>
        </div>
        <div v-else>
            <header-component title="Vehicle Inspection"></header-component>
            <div class="col">
                <back-button></back-button>
                 <span  class="font-weight-light d-flex align-items-start text-wrap">Click each box to capture</span>
                <b-card class="card-style mb-3"  @click="openVideo = true">
                    <div class="row px-3">
                        <input v-model="videoUrl" class=" mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <span :class="`${videoUrl ? 'line-stroke' : ''}`">Video recording of your vehicle</span>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('engine')">
                    <div class="row px-3">
                        <input v-model="image.imageUrl1" class=" mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <span :class="`${image.imageUrl1 ? 'line-stroke' : ''}`">Capture your Engine</span>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('front')">
                    <div class="row px-3">
                        <input v-model="image.imageUrl2" class="mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <span :class="`${image.imageUrl2 ? 'line-stroke' : ''}`">Capture the front view of your vehicle</span>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('rear')">
                    <div class="row px-3">
                        <input v-model="image.imageUrl3" class=" mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <span :class="`${image.imageUrl3 ? 'line-stroke' : ''}`">Capture the rear view of your vehicle</span>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('right')">
                    <div class="row px-3">
                        <input v-model="image.imageUrl4" class=" mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <span :class="`${image.imageUrl4 ? 'line-stroke' : ''}`">Capture the right side of your vehicle</span>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('left')">
                    <div class="row px-3">
                        <input v-model="image.imageUrl5" class=" mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <span :class="`${image.imageUrl2 ? 'line-stroke' : ''}`">Capture the left side of your vehicle</span>
                    </div>
                </b-card>
                <custom-button @click="validateUploads()" title="Continue"></custom-button> 

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
import MlService from "@/services/ml.js"
import Loading from '@/components/PredictionLoader.vue';
import FileUpload from '@/services/img_upload.js';
import PreEvaluation from '@/services/pre_evaluation.js';
import {showError} from "@/helpers/alerts";
export default {
    name: "UploadOptions",
    components: {
        HeaderComponent,
        CustomButton,
        BackButton,
        CameraComponent,
        VideoComponent,
        Loading
    },
    data(){
        return{
            openCamera: false,
            openVideo: false,
            videoUrl: null,
            valEmit: null,
            pictureType: null,
            video: null, 
            mlService: new MlService(),
            showLoading: false,
            predictions: {},
            fileUpload: new FileUpload(),
            preEvaluation: new PreEvaluation(),
            image: {},
            path: {},
            images: {}
        }
    },
    watch: {
        valEmit() {
            this.handleEmits();
        },
    },
    methods: {
        handleEmits() {
            if(this.valEmit.image == "imageUrl1"){
                this.image.imageUrl1 = true;
                localStorage.setItem('image', JSON.stringify(this.image));
                this.openCamera = false;
                this.path.enginePath = this.valEmit.url;      
            }
            else if(this.valEmit.image == "imageUrl2"){
                this.image.imageUrl2 = true;
                localStorage.setItem('image', JSON.stringify(this.image));
                this.openCamera = false;
                this.path.frontPath = this.valEmit.url;
                this.images.image_data1 = this.mlService.s3Url+this.path.frontPath;
                localStorage.setItem('images', JSON.stringify(this.images));
            }
             else if(this.valEmit.image == "imageUrl3"){
                this.image.imageUrl3 = true;
                localStorage.setItem('image', JSON.stringify(this.image));
                this.openCamera = false;
                this.path.rearPath = this.valEmit.url;
                this.images.image_data2 = this.mlService.s3Url+this.path.rearPath;
                localStorage.setItem('images', JSON.stringify(this.images));
            }
             else if(this.valEmit.image == "imageUrl4"){
                this.image.imageUrl4 = true;
                localStorage.setItem('image', JSON.stringify(this.image));
                this.openCamera = false;
                this.path.rightPath = this.valEmit.url;
                this.images.image_data3 = this.mlService.s3Url+this.path.rightPath;
                localStorage.setItem('images', JSON.stringify(this.images));
            }
             else if(this.valEmit.image == "imageUrl5"){
                this.image.imageUrl5 = true;
                localStorage.setItem('image', JSON.stringify(this.image));
                this.openCamera = false;
                this.path.leftPath = this.valEmit.url
                this.images.image_data4 = this.mlService.s3Url+this.path.leftPath;
                localStorage.setItem('images', JSON.stringify(this.images));
            }
            else if(this.valEmit.type == "video"){
                this.videoUrl = true;
                localStorage.setItem('videoUrl', JSON.stringify(this.videoUrl));
                this.openVideo = false;
                this.path.videoPath = this.valEmit.url;
                this.valEmit = {};
            }
        },
        handleType(type){
            this.openCamera = true;
            this.pictureType = type;
            this.valEmit = {};
        },
        validateUploads(){
            if(this.image.imageUrl1=== false || this.image.imageUrl2 ===false || 
            this.image.imageUrl3 === false  || this.image.imageUrl4 === false 
            || this.image.imageUrl5 === false || this.videoUrl === false) return;
            this.showLoading = true;
            this.preEvaluation.mlValidate(this.images)
            .then(resp=> {
                let isAutomobile = false;
                for(let i = 0; i<resp.data.length; i++){
                if(resp.data[i]['is_expected_automobile'] == false){
                    isAutomobile = true;
                    this.image = {};
                    this.path = {};
                    this.images = {};
                    showError('Error', "You have uploaded an image that is not a vehicle, Please retake images");
                    break;
                }
                }
                if(isAutomobile === true) return;
                this.mlPredictions(resp.data)
                this.fileUpload.updateData(resp.data)
                .then(resp=>{
                    console.log(resp.data);
                })
                .catch(err=>{
                    console.log(err);
                     showError('Error', err);
                })
                
            })
            .catch(error=>{
               console.log(error)
               showError('Error', error);
            })
            .finally(()=>{this.showLoading = false});
        },

        mlPredictions(data){
            let frontDamages = data[0].damaged_parts.Detected_damages;
            let frontScores = data[0].damaged_parts.scores;
            let frontResult = [];
            localStorage.setItem("front", JSON.stringify(frontDamages));

            for(let i = 0; i < frontDamages.length; i++){
               frontResult.push(
                    {
                        prediction: frontDamages[i],
                        score: frontScores[i]
                    }
                )
            }
            

            let rearDamages = data[1].damaged_parts.Detected_damages;
            let rearScores = data[1].damaged_parts.scores;
            let rearResult = [];
            localStorage.setItem("rear", JSON.stringify(rearDamages));

            for(let i = 0; i < rearDamages.length; i++){
               rearResult.push(
                    {
                        prediction: rearDamages[i],
                        score: rearScores[i]
                    }
                )
            }
            

            let rightDamages = data[2].damaged_parts.Detected_damages;
            let rightScores = data[2].damaged_parts.scores;
            let rightResult = [];
            localStorage.setItem("right", JSON.stringify(rightDamages));

            for(let i = 0; i < rightDamages.length; i++){
               rightResult.push(
                    {
                        prediction: rightDamages[i],
                        score: rightScores[i]
                    }
                )
            }
            

            let leftDamages = data[3].damaged_parts.Detected_damages;
            let leftScores = data[3].damaged_parts.scores;
            let leftResult = [];
            localStorage.setItem("left", JSON.stringify(leftDamages));

            for(let i = 0; i < leftDamages.length; i++){
               leftResult.push(
                    {
                        prediction: leftDamages[i],
                        score: leftScores[i]
                    }
                )
            }
           
            this.$router.push({ name: 'inspectionReport', 
            params: {
                front: frontResult ,
                rear: rearResult,
                right: rightResult,
                left: leftResult
                }
            })
        }
        
    },
    mounted(){
        if(localStorage.getItem('image')){
           this.image = JSON.parse(localStorage.getItem('image'));
        }
        if(localStorage.getItem('videoUrl')){
           this.videoUrl = JSON.parse(localStorage.getItem('videoUrl'));
        }
        if(localStorage.getItem('images')){
           this.images = JSON.parse(localStorage.getItem('images'));
        }
        
        
    }
    
}
</script>

<style scoped>
.card-style{
    height:60px;
    border: 1;
    background: #FFFFFF;
}
.line-stroke {
    text-decoration: line-through;
}
</style>