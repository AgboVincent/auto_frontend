<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
             <back-button></back-button>
             <page-description title="Steps on inspecting your vehicle"
                               subtitle="Follow the instructions below">
             </page-description>
             <b-card>
                 <div class="col">
                     <div class="row px-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6  class="text-justify mt-1">Make sure the environment for capture is well lit.</h6>
                        </div>
                    </div>
                    <br>
                    <div class="row px-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6  class="text-justify mt-1">Record the video of your vehicle in the well-lit environment.</h6>
                        </div>
                    </div>
                    <div class="row px-3 py-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6 class="text-justify mt-1">The Video should not be longer than 15 seconds</h6>
                        </div>
                    </div>
                     <div class="row px-3 py-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6 class="text-justify mt-1">Capture image of your vehicle’s engine</h6>
                        </div>
                    </div>
                    <div class="row px-3 py-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6 class="text-justify mt-1">Capture images of the front, rear, left and right side of your vehicle</h6>
                        </div>
                    </div>
                 </div>
             </b-card>
             <custom-button @click="$router.push('/uploadOptions').catch(() => {})" title="Continue"></custom-button>
        </div>     
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import CustomButton from "../components/CustomButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import BackButton from "@/components/BackButton.vue";
export default {
     name:"InspectionSteps",
     components: {
         HeaderComponent,
         CustomButton,
         PageDescription,
         BackButton
     },
     data(){
         return{

         }
     }
    
}
</script>


<style scoped>
.back-btn{
        background-color: #F3F5F8;
        border: 0;
        color: #5E626A;
        font-size: 14px;
        border-radius: 8px;
    
    }

</style>