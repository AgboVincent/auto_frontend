<template>
    <div>
        <header-component title="Insurance Claims"></header-component>
        <div class="col">
            <back-button></back-button>
              <div class="my-2">
                    <h5  class="title d-flex align-items-start">Tell us a bit about the incident</h5> 
                    <span class="font-weight-light d-flex align-items-start">Please tell us what happened, including when and</span>
                     <span class="font-weight-light d-flex align-items-start"> where the event occured</span>
              </div>
              <form @submit.stop.prevent="storeData">
                <div class="col my-3">
                    <label class="d-flex align-items-start" for="example-datepicker">When did the incident occur</label>
                    <b-form-datepicker  v-model="data.date" class="mb-2 date-picker"></b-form-datepicker>
                </div>
                
                <div class="col">
                    <label class="d-flex align-items-start" for="example-datepicker">Time of the incident</label>
                    <b-form-timepicker v-model="data.time" locale="en" style="text-align:start"></b-form-timepicker>
                </div>
            
               <div class="col my-3">
                   <label class="d-flex align-items-start" for="example-datepicker">Enter street address/location</label>
                    <input v-model="data.location" placeholder="Location" type="text" class="form-control" 
                    aria-label="Sizing example input"  id="validationDefault02" required>
               </div>

               <div class="col my-3">
                   <label class="d-flex align-items-start" for="example-datepicker">Enter landmark (optional)</label>
                    <input v-model="data.landmark" placeholder="Landmark" type="text" class="form-control" 
                    aria-label="Sizing example input"  id="validationDefault02" required>
               </div>

               <div class="col my-3">
                    <label class="d-flex align-items-start">Select accident type</label>
                    <select  v-model="data.accident_id" class="custom-select" id="validationDefault03" required>
                        <option :value="data.id" disabled>Accident type</option>
                        <option v-for="type in types" :key="type.id" :value="type.id">{{type.name}}</option>    
                    </select>
                </div>

                <div class="col my-3">
                   <label class="d-flex align-items-start">Enter Accicent description</label>
                    <input v-model="data.descriptions" placeholder="Description" type="text" class="form-control" style="height:80px"
                    aria-label="Sizing example input"  id="validationDefault02" required>
               </div>

               <custom-button  type="submit" title="Continue"></custom-button>
            </form>  
        </div>
    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue';
import BackButton from "@/components/BackButton.vue";
import CustomButton from "@/components/CustomButton.vue";
import Collection from '@/services/collection.js';
export default {
    name:"ClaimsForm",
    components: {
        HeaderComponent,
        BackButton,
        CustomButton
    },
    data() {
        return {
            types: [],
            collection: new Collection(),
            data: {}
        }
    },
    methods: {
        storeData() {
            localStorage.setItem('collectionData', JSON.stringify(this.data)); 
            this.$router.push('/collectionSteps')
        },
    },
    mounted(){
        this.collection.getAccidentTypes()
        .then(response =>{
            this.types = response.data.data;
        })
        .catch(e => {
            console.log(e)
        });  
    }
    
}
</script>


<style scoped>
.date-picker{
    text-align: start;
}

</style>