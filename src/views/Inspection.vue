<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
            <div class="d-flex align-items-start">
                   <button class="back-btn px-2 mt-5 py-1">
                     <img class="pb-1 pr-2" src="../assets/arrow_back.png"> Back
                   </button>  
               </div>
               <div class="my-4">
                    <h5  class="title d-flex align-items-start">Tell us a bit about your vehicle</h5> 
                    <span class="font-weight-light d-flex align-items-start">Please provide accurate information.</span>
               </div>
               <div class="input-group input-group-md">
                    <input placeholder="Fullname" type="text" class="form-control" aria-label="Sizing example input" >
               </div>
                <div class="input-group input-group-md py-3">
                    <input placeholder="Email address" type="text" class="form-control" aria-label="Sizing example input" >
               </div>
               
               <div class="input-group mb-3">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Select vehicle make</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>

               <div class="input-group mb-3">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Year of manufacture</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
               
               <div class="input-group mb-3">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Select vehicle model</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>

               <div class="input-group input-group-md py-3">
                    <input placeholder="Enter value of the vehicle" type="text" class="form-control" aria-label="Sizing example input" >
               </div>
               
               <div class="input-group mb-3">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Vehicle status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
               
               <div class="input-group mb-3">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Color of vehicle</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
               <div class="input-group mb-3">
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Enter VIN or chasis number</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <custom-button @click="$router.push('/inspectionSteps')" title="Continue"></custom-button>
        </div>
    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'
import CustomButton from "../components/CustomButton.vue";
export default {
    name:"VehicleInspection",
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
    .title{
        color:#030124;
        font-weight: 500;
        font-size: 21px;
    }
</style>