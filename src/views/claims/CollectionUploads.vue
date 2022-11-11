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
                                <input v-model="videoUrl" class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                                <h6>Video recording of the damaged part</h6>
                            </div>
                        </b-card>
                        <b-card class="card-style mb-3" @click="openCamera = true">
                            <div class="row px-3">
                                <input v-model="image.imageUrl" class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                                <h6>Upload image of the damaged part</h6>
                            </div>
                        </b-card>
                        <br>
                        <h5 @click="openCamera = true" class=" view d-flex align-items-start">Upload another image</h5>
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
import Loading from '@/components/Loading.vue';
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
        }
    },
    watch: {
        valEmit() {
            this.handleEmits();
        },
    },
    methods: {
        handleEmits() {
            if(this.valEmit == 'image'){
                this.image.imageUrl = true;
                localStorage.setItem('imageClaims', JSON.stringify(this.image));
                this.openCamera = false;   
                this.valEmit = {};  
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
            this.$router.push('/collectionReview')
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

</style>