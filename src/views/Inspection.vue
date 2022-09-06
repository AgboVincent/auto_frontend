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
                    <input v-model="data.name" placeholder="Fullname" type="text" class="form-control" aria-label="Sizing example input" >
               </div>
                <div class="input-group input-group-md py-3">
                    <input v-model="data.email" placeholder="Email address" type="text" class="form-control" aria-label="Sizing example input" >
               </div>
               
               <div class="input-group mb-3">
                <select @change="trackBrand($event)" v-model="data.brand" class="custom-select" id="inputGroupSelect01">
                    <option :value="data.id" disabled>Select vehicle brand</option>
                    <option v-for="brand in brands" :key="brand.id" :value="brand.brand">{{brand.brand}}</option>    
                </select>
                </div>

               <div class="input-group mb-3">
                <select v-model="data.manufacturer" class="custom-select" id="inputGroupSelect01">
                    <option :value="data.id" disabled>Year of manufacture</option>
                   <option v-for="year in years" :key="year.id" :value="year">{{year}}</option> 
                </select>
                </div>
               
               <div class="input-group mb-3">
                <select v-model="data.model" class="custom-select" id="inputGroupSelect01">
                    <option :value="data.id" disabled>Select vehicle model</option>
                    <option v-for="model in models" :key="model.id" :value="model.model">{{model.model}}</option>  
                </select>
                </div>

               <div class="input-group input-group-md py-3">
                    <input v-model="data.chassis_number" placeholder="Enter VIN or chasis number" type="text" class="form-control" aria-label="Sizing example input" >
               </div>
               
               <div class="input-group mb-3">
                <select v-model="data.status" class="custom-select" id="inputGroupSelect01">
                    <option :value="data.id" disabled>Vehicle status</option>
                    <option value="Sever Damage">Sever Damage</option>
                    <option value="Fair Damage">Fair Damage</option>
                    <option value="Mid level damage">Mid level Damage</option>
                </select>
                </div>
               
               <div class="input-group mb-3">
                <select v-model="data.color" class="custom-select" id="inputGroupSelect01">
                    <option :value="data.id" disabled>Color of vehicle</option>
                    <option v-for="color in colors" :key="color.id" :value="color">{{color}}</option>  
                </select>
                </div>
        
                <custom-button @click="$router.push('/inspectionSteps')" title="Continue"></custom-button>
        </div>
    </div>
</template>
//submitVehicleDetails()
//$router.push('/inspectionSteps')
<script>
import HeaderComponent from '@/components/Header.vue'
import CustomButton from "../components/CustomButton.vue";
import PreEvaluation from '@/services/pre_evaluation.js';
export default {
    name:"VehicleInspection",
    components: {
        HeaderComponent,
        CustomButton
    },
    data(){
        return{
            showLoading: false,
            data: {},
            preEvaluation: new PreEvaluation(),
            brands: [],
            model: null,
            models: [],
            colors:[ 'blue', 'red', 'white', 'black', 'grey'],
            years: ['2016', '2017', '2018', '2019', '2020', '2021'],
            brand: ""

        }
    },
    watch:{
        brand(){
              console.log(this.brand)
            if(this.brand){
                this.preEvaluation.getVehicleModel(this.brand)
                .then(response =>{
                    console.log(response)
                    this.models = response.data;
                })
                .catch(e => {
                    console.log(e)
                })
            }
        }

    },
    methods: {
        submitVehicleDetails() {
            console.log(this.data)
            this.preEvaluation.submitVehicleDetails(this.data)
            .then(response => {
                console.log(response);
            })
            .catch(e => {
                console.log(e)
            })
            .finally(()=>{this.showLoading = false})
            
        },
        trackBrand(event){
            this.brand = event.target.value;
        }
    },
    mounted(){
        this.preEvaluation.getVehicleBrands()
        .then(response =>{
            console.log(response)
            this.brands = response.data;
        })
        .catch(e => {
            console.log(e)
        })

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