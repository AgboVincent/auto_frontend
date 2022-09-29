<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Vehicle Inspection Report"
                              subtitle="Text Summary on inspection report.">
            </page-description>
            <b-card>
                <b-col v-if="carData">
                    <b-row class="justify-content-between">
                        <b-col>
                            <h5 class="title d-flex align-items-start">Vehicle Brand</h5>
                            <h5 class="value d-flex align-items-start">{{carData.brand}}</h5>
                        </b-col>
                        <b-col>
                            <h5 class="title d-flex justify-content-end">Vehicle Model</h5>
                            <h5 class="value d-flex justify-content-end">{{carData.model}}</h5>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row class="justify-content-between">
                        <b-col>
                            <h5 class="title d-flex align-items-start">Color</h5>
                            <h5 class="value d-flex align-items-start">{{carData.color}}</h5>
                        </b-col>
                        <b-col>
                            <h5 class="title d-flex justify-content-end">Year</h5>
                            <h5 class="value d-flex justify-content-end">{{carData.year}}</h5>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row class="justify-content-between">
                         <b-col>
                             <h5 class="title d-flex align-items-start">VIN</h5>
                             <h5 class="value d-flex align-items-start">{{ carData.chassis_number}}</h5>
                        </b-col>
                    </b-row>
                </b-col>
            </b-card>
            <br>
            <b-card>
                <b-col>
                    <b-col>
                        <b-card class="shadow-sm mb-3" border-variant="light">
                            <div class="mb-3">
                                <nav class="container-fluid-nav navbar navbar-light bg-light">
                                    <h4 class="title mt-2">FRONT VIEW</h4>
                                </nav>
                            </div>
                            <b-row v-for="damage in frontView" 
                                        :key="damage.id" class="justify-content-between mb-3"> 
                                <b-col>
                                    <h5  class="d-flex good align-items-start">{{damage.part}}
                                    </h5>
                                </b-col>                     
                            
                                <b-col>
                                    <h5 class="d-flex justify-content-end good" :style="{color:damage.color}">{{ damage.prediction }}</h5>
                                    <h5 class="d-flex justify-content-end good" :style="{color:damage.color}">
                                        {{ (+damage.damage).toFixed(2)*100 }}% damage</h5>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>

                    <b-col>
                        <b-card class="shadow-sm mb-3" border-variant="light">
                            <div class="mb-3">
                                <nav class="container-fluid-nav navbar navbar-light bg-light">
                                    <h4 class="title mt-2">REAR VIEW</h4>
                                </nav>
                            </div>
                        
                            <b-row v-for="damage in rearView" 
                                        :key="damage.id" class="justify-content-between mb-3">
                                <b-col>
                                    <h5 class="good d-flex align-items-start">{{ damage.part }}</h5>
                                </b-col>        
                                
                                <b-col>
                                    <h5 class="d-flex justify-content-end good" :style="{color:damage.color}">{{ damage.prediction }}</h5>
                                    <h5 class="d-flex justify-content-end good" :style="{color:damage.color}">{{ (+damage.damage).toFixed(2)*100 }}% damage</h5>
                                </b-col>
                            </b-row> 
                        </b-card>                   
                    </b-col>

                    <b-col>
                        <b-card class="shadow-sm mb-3" border-variant="light">            
                            <div class="mb-3">
                                <nav class="container-fluid-nav navbar navbar-light bg-light">
                                    <h4 class="title mt-2">RIGHT VIEW</h4>
                                </nav>
                            </div>
                        
                            <b-row v-for="damage in rightView" 
                                        :key="damage.id" class="justify-content-between mb-3">
                                <b-col>
                                    <h5 class="good d-flex align-items-start">{{ damage.part }}</h5>
                                </b-col>        
                                
                                <b-col>
                                    <h5 class="d-flex justify-content-end good" :style="{color:damage.color}">{{ damage.prediction }}</h5>
                                    <h5 class="d-flex justify-content-end good" :style="{color:damage.color}">{{ (+damage.damage).toFixed(2)*100 }}% damage</h5>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>

                    <b-col>
                        <b-card class="shadow-sm mb-3" border-variant="light">                       
                            <div class="mb-3">
                                <nav class="container-fluid-nav navbar navbar-light bg-light">
                                    <h4 class="title mt-2">LEFT VIEW</h4>
                                </nav>
                            </div>    
                            <b-row v-for="damage in leftView" 
                                        :key="damage.id" class="justify-content-between mb-3">
                                <b-col>
                                    <h5 class="good d-flex align-items-start">{{ damage.part }}</h5>
                                </b-col>
                                
                                <b-col>
                                    <h5 class="d-flex justify-content-end good" :style="{color:damage.color}">{{ damage.prediction }}</h5>
                                    <h5 class="d-flex justify-content-end good" :style="{color:damage.color}">{{ (+damage.damage).toFixed(2)*100 }}% damage</h5>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-col>
            </b-card>
            <custom-button @click="$router.push('/buyPolicy')" title="Continue"></custom-button>
        </div>
    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'
import CustomButton from "@/components/CustomButton.vue";
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import DamageTpyes from '@/services/damage_types.js';
export default {
    name:"InspectionReport",
    components: {
        HeaderComponent,
        CustomButton,
        BackButton,
        PageDescription
    },
    props: {
        front: { type: Array, default: null },
        rear: { type: Array, default: null },
        right: { type: Array, default: null },
        left: { type: Array,  default: null },
    },
    data() {
        return {
            carData: null,
            predictions:null,
            damageTypes: new DamageTpyes(),
            prediction: null,
            score: null,
            frontView: [],
            rearView: [],
            rightView: [],
            leftView: []
        
        }
    },

    methods: {
        detectFront() {
            for(let i = 0; i < this.front.length; i++){
                 for(let j = 0; j < this.damageTypes.frontDamage.length; j++ ){
                     if( this.damageTypes.frontDamage[j] == this.front[i].prediction){
                         this.frontView.push(
                             {part:this.damageTypes.frontDamage[j],
                              damage: this.front[i].score,
                              prediction: "Damage detected",
                              color: "#EC2D20"
                             }
                          )                      
                     }   
                 }            
            }
            for(let j = 0; j < this.damageTypes.frontDamage.length; j++ ){               
                const index = this.front.findIndex(object => object.prediction === this.damageTypes.frontDamage[j]);
                if (index === -1) {
                    this.frontView.push(
                        {part:this.damageTypes.frontDamage[j],
                            damage: "0",
                            prediction: "No Damage",
                            color: "#06B856"
                        }
                    );
                }
            }     
            console.log(this.frontView) 

            for(let i = 0; i < this.rear.length; i++){
                 for(let j = 0; j < this.damageTypes.rearDamage.length; j++ ){
                     if( this.damageTypes.rearDamage[j] == this.rear[i].prediction){
                         this.rearView.push(
                             {part:this.damageTypes.rearDamage[j],
                              damage: this.rear[i].score,
                              prediction: "Damage detected",
                              color: "#EC2D20"
                             }
                          )                      
                     }   
                 }            
            }
            for(let j = 0; j < this.damageTypes.rearDamage.length; j++ ){               
                const index = this.rear.findIndex(object => object.prediction === this.damageTypes.rearDamage[j]);
                if (index === -1) {
                    this.rearView.push(
                        {part:this.damageTypes.rearDamage[j],
                            damage: "0",
                            prediction: "No Damage",
                            color: "#06B856"
                        }
                    );
                }
            }     
            console.log(this.rearView) 

             for(let i = 0; i < this.right.length; i++){
                 for(let j = 0; j < this.damageTypes.rightSideDamage.length; j++ ){
                     if( this.damageTypes.rightSideDamage[j] == this.right[i].prediction){
                         this.rightView.push(
                             {part:this.damageTypes.rightSideDamage[j],
                              damage: this.right[i].score,
                              prediction: "Damage detected",
                              color: "#EC2D20"
                             }
                          )                      
                     }   
                 }            
            }
            for(let j = 0; j < this.damageTypes.rightSideDamage.length; j++ ){               
                const index = this.right.findIndex(object => object.prediction === this.damageTypes.rightSideDamage[j]);
                if (index === -1) {
                    this.rightView.push(
                        {part:this.damageTypes.rightSideDamage[j],
                            damage: "0",
                            prediction: "No Damage",
                            color: "#06B856"
                        }
                    );
                }
            }     
            console.log(this.rightView) 


            for(let i = 0; i < this.left.length; i++){
                 for(let j = 0; j < this.damageTypes.leftSideDamage.length; j++ ){
                     if( this.damageTypes.leftSideDamage[j] == this.left[i].prediction){
                         this.leftView.push(
                             {part:this.damageTypes.leftSideDamage[j],
                              damage: this.left[i].score,
                              prediction: "Damage detected",
                              color: "#EC2D20"
                             }
                          )                      
                     }   
                 }            
            }
            for(let j = 0; j < this.damageTypes.leftSideDamage.length; j++ ){               
                const index = this.left.findIndex(object => object.prediction === this.damageTypes.leftSideDamage[j]);
                if (index === -1) {
                    this.leftView.push(
                        {part:this.damageTypes.leftSideDamage[j],
                            damage: "0",
                            prediction: "No Damage",
                            color: "#06B856"
                        }
                    );
                }
            }     
            console.log(this.leftView) 
            
        },
    },
    mounted(){
        if(localStorage.getItem('carData')){
            this.carData = JSON.parse(localStorage.getItem('carData'));
        }
        this.detectFront();
    }
    
}
</script>

//will use the formatter function to display colors based on the status
<style scoped>

.title{
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    color: #5E626A;
    text-align: center;
    width: 100%;
    display: block;
    float: none;
}
.value{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.2px;
    color: #030124;
}
.good{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: -0.2px;
    color: #06B856;
}
.severe{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: -0.2px;
    color: #EC2D20;
}

</style>