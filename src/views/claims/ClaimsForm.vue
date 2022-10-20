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
              <form @submit.stop.prevent="submitIncident">
                <div class="col my-3">
                    <label class="d-flex align-items-start" for="example-datepicker">When did the incident occur</label>
                    <b-form-datepicker  v-model="date" class="mb-2 date-picker"></b-form-datepicker>
                </div>
                
                <div class="col">
                    <label class="d-flex align-items-start" for="example-datepicker">Time of the incident</label>
                    <b-form-timepicker v-model="time" locale="en" style="text-align:start"></b-form-timepicker>
                </div>
            
               <div class="col my-3">
                   <label class="d-flex align-items-start" for="example-datepicker">Enter street address</label>
                    <input v-model="street" placeholder="street address" type="text" class="form-control" 
                    aria-label="Sizing example input"  id="validationDefault02" required>
               </div>

               <div class="col my-3">
                   <label class="d-flex align-items-start" for="example-datepicker">Enter landmark (optional)</label>
                    <input v-model="street" placeholder="Landmark" type="text" class="form-control" 
                    aria-label="Sizing example input"  id="validationDefault02" required>
               </div>

               <custom-button  type="submit" title="Continue"></custom-button>
            </form>  
        </div>
    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import CustomButton from "@/components/CustomButton.vue";
export default {
    name:"ClaimsForm",
    components: {
        HeaderComponent,
        BackButton,
        CustomButton
    },
    data() {
        return {
            date: '',
            time: '',
            street: ''
            
        }
    },
    methods: {
        submitIncident() {
            
        },
    },
    
}
</script>


<style scoped>
.date-picker{
    text-align: start;
}

</style>