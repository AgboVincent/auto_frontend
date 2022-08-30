<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
            <back-button></back-button>
            <b-card class="card-style mb-3">
                <div class="row px-3">
                    <input class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                    <h6>Video recording of your vehicle</h6>
                </div>
            </b-card>
            <b-card class="card-style mb-3">
                <div class="row px-3">
                    <input class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                    <h6>Capture your Engine</h6>
                </div>
            </b-card>
            <b-card class="card-style mb-3">
                <div class="row px-3">
                    <input class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                    <h6>Capture the front view of your vehicle</h6>
                </div>
            </b-card>
            <b-card class="card-style mb-3">
                <div class="row px-3">
                    <input class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                    <h6>Capture the rear view of your vehicle</h6>
                </div>
            </b-card>
            <b-card class="card-style mb-3">
                <div class="row px-3">
                    <input class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                    <h6>Capture the right side of your vehicle</h6>
                </div>
            </b-card>
            <b-card class="card-style mb-3">
                <div class="row px-3">
                    <input class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                    <h6>Capture the left side of your vehicle</h6>
                </div>
            </b-card>
            <custom-button @click="$router.push('/inspectionReport')" title="continue"></custom-button> 

        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import CustomButton from "@/components/CustomButton.vue";
import BackButton from "@/components/BackButton.vue";

export default {
    name: "UploadOptions",
    components: {
        HeaderComponent,
        CustomButton,
        BackButton
    },
    data(){
        return{

        }
    },
    methods: {
        name() {
            
        },
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