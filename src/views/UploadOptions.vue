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
import Loading from '../components/Loading.vue';
import FileUpload from '@/services/img_upload.js';
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
            imageUrl1: false,
            imageUrl2: null,
            imageUrl3: null,
            imageUrl4: null,
            imageUrl5: null,
            videoUrl: null,
            valEmit: null,
            pictureType: null,
            video: null, 
            mlService: new MlService(),
            showLoading: false,
            leftPath: null,
            rightPath: null,
            frontPath: null,
            rearPath: null,
            enginePath: null,
            videoPath: null,
            predictions: {},
            fileUpload: new FileUpload(),
        }
    },
    watch: {
        valEmit() {
            this.handleEmits();
        },
    },
    computed: {
        images() {
            return{
                image_data1: this.mlService.s3Url+this.frontPath,   //front
                image_data2: this.mlService.s3Url+this.rearPath,   //rear
                image_data3: this.mlService.s3Url+this.rightPath,   //right
                image_data4: this.mlService.s3Url+this.leftPath    //left
            }
        },
    },
    methods: {
        handleEmits() {
            if(this.valEmit.image == "imageUrl1"){
                this.imageUrl1 = true;
                this.openCamera = false;
                this.enginePath = this.valEmit.url;
            }
            else if(this.valEmit.image == "imageUrl2"){
                this.imageUrl2 = true;
                this.openCamera = false;
                this.frontPath = this.valEmit.url;
            }
             else if(this.valEmit.image == "imageUrl3"){
                this.imageUrl3 = true;
                this.openCamera = false;
                this.rearPath = this.valEmit.url;
            }
             else if(this.valEmit.image == "imageUrl4"){
                this.imageUrl4 = true;
                this.openCamera = false;
                this.rightPath = this.valEmit.url;
            }
             else if(this.valEmit.image == "imageUrl5"){
                this.imageUrl5 = true;
                this.openCamera = false;
                this.leftPath = this.valEmit.url
            }
            else if(this.valEmit.type == "video"){
                this.videoUrl = true;
                this.openVideo = false;
                this.videoPath = this.valEmit.url;
                this.valEmit = {};
            }
        },
        handleType(type){
            this.openCamera = true;
            this.pictureType = type;
            this.valEmit = {};
        },
        validateUploads(){
            if(this.frontPath === null || this.rearPath === null || 
            this.leftPath === null || this.rightPath === null) return;
            this.showLoading = true;
            this.mlService.detect(this.images)
            .then(resp=> {
                this.mlPredictions(resp.data)
                this.fileUpload.updateData(resp.data)
                .then(resp=>{
                    console.log(resp.data);
                })
                .catch(err=>{
                    console.log(err);
                })
                
            })
            .catch(error=>{
               console.log(error)
            })
            .finally(()=>{this.showLoading = false});
        },

        mlPredictions(data){
            let frontDamages = data[0].damaged_parts.Detected_damages;
            let frontScores = data[0].damaged_parts.scores;
            let frontResult = [];

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
    
}
</script>

<style scoped>
.card-style{
    height:60px;
    border: 1;
    background: #FFFFFF;
}
</style>