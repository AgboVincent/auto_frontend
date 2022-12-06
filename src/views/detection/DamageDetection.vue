<template>
    <div>
        <header-component title="Insurance Claims"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Vehicle condition report"
                              subtitle="Review Condition report of your vehicle submitted for claims vetting.">
            </page-description>
             <br>
             <b-card @click="$bvModal.show('addDamage')">
                 <b-row> 
                     <div>
                         <img class="pb-1 pr-2 mx-3" src="../../assets/plus_circle.png"> 
                     </div>                    
                        <h5 class="value mt-1">Include new body part</h5>                 
                 </b-row>
             </b-card>
             <br>

            <b-card class="mb-3">
                <h5 class="title d-flex align-items-start mb-3">Detected vehicle parts</h5>
                <b-row v-for="(data, index) in detectedDamages" :key="data.id">
                    <b-col>
                        <h5 class="good d-flex align-items-start">{{data}}</h5>
                        <div v-if="selectedIndex == index" class="input-group mb-3">
                            <select  v-model="detectedDamages[index]" @change="selectedIndex = null" class="custom-select" id="validationDefault03" required>
                                <option :value="data.id" disabled>Select item name</option>
                                <option v-for="item in damageTypes.allDamages" :key="item.id" :value="item">{{item}}</option>    
                            </select>
                        </div>
                    </b-col>
                    
                    <b-col>
                        <h5 class="d-flex justify-content-end good mr-5" style="color: #EC2D20;">Damaged</h5>
                    </b-col>
                    <div>
                         <img @click="selectedIndex = index" class="pb-1 pr-2 mx-3" src="../../assets/edit.svg"> 
                     </div>
                     <div>
                         <img @click="detectedDamages.splice(index, 1)" class="pb-1 pr-2 mx-3"  src="../../assets/delete.png"> 
                     </div>
                </b-row>
            </b-card>
            
            <custom-button @click="nextPage()" type="submit" title="Continue"></custom-button>
        </div>
        <add-damage-modal @newDamage="addDamage=$event">

        </add-damage-modal>
    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue';
import BackButton from "@/components/BackButton.vue";
import CustomButton from "@/components/CustomButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import DamageTpyes from '@/services/damage_types.js';
import AddDamageModal from '../detection/AddDamage.vue'
import {showSuccess} from "@/helpers/alerts";
export default {
    name: "DamageDetection",
    components: {
         HeaderComponent,
         BackButton,
         PageDescription,
         CustomButton,
         AddDamageModal
    },
     props: {
        ml: { type: Array, default: null }
    },
    data() {
        return {
            claimsData: {},
            detectedDamages: [],
            damageTypes: new DamageTpyes(),
            selectedIndex: null,
            addDamage: null
        }
    },
    watch: {
        addDamage(){
            this.detectedDamages.push(this.addDamage)
        }
        
    },
    methods: {
        nextPage() {
            if(this.detectedDamages.length === 0){
                showSuccess('Please add the damaged part');
                return; 
            }
            localStorage.setItem("damages", JSON.stringify(this.detectedDamages));
            this.$router.push('/quotes')  
        },
    },
    mounted(){
        if(this.ml){
            for(let i = 0; i < this.ml.length; i++)
            {
                for( let j = 0; j < this.ml[i].length; j++)
                {
                    this.detectedDamages.push(this.ml[i][j])
                }
            }
        }
    }
}
</script>


<style scoped>
.value{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.2px;
    color: #030124;
}
.title{
    color:#030124;
    font-weight: 500;
    font-size: 16px;   
    font-family: 'Outfit';
    font-style: normal;  
}
.good{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: -0.2px;
    color: #6F7278;
}

</style>