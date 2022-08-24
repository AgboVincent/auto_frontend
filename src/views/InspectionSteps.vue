<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
             <div class="d-flex align-items-start">
                   <button class="back-btn px-2 my-5 py-1">
                     <img class="pb-1 pr-2" src="../assets/arrow_back.png"> Back
                   </button>
             </div>
             <b-card>
                 <div class="col">
                     <div class="row px-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6 class="d-flex align-items-start">Make sure the environment for capture is well lit.</h6>
                        </div>
                    </div>
                    <div class="row px-3 py-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6 class="d-flex align-items-start">Record the video of your vehicle in the well-lit environment.</h6>
                        </div>
                    </div>
                    <div class="row px-3 py-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6 class="d-flex align-items-start">The Video should not be longer than 2minutes</h6>
                        </div>
                    </div>
                    <div class="row px-3 py-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6 class="d-flex align-items-start">Capture images of your VIN (Vehicle Inspection Number) and the Chassis number.</h6>
                        </div>
                    </div>
                     <div class="row px-3 py-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6 class="d-flex align-items-start">Capture image of your vehicle’s engine</h6>
                        </div>
                    </div>
                    <div class="row px-3 py-3">
                        <div>
                            <img src="../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6 class="d-flex align-items-start">Capture images of the front, rear, left and right side of your vehicle</h6>
                        </div>
                    </div>
                 </div>
             </b-card>
             <br><br>
             <custom-button @click="$router.push('/uploadOptions')" title="Continue"></custom-button>
        </div>     
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import CustomButton from "../components/CustomButton.vue";
export default {
     name:"InspectionSteps",
     components: {
         HeaderComponent,
         CustomButton
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