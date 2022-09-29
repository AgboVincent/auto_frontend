<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Insurance Review"
                              subtitle="Text on insurance review">
            </page-description>
            <b-card>
                <b-col v-if="carData && policy">
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Full name</h5>
                        <h5 class="value d-flex align-items-start">{{ capitalizeFirst(carData.name) }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Email</h5>
                        <h5 class="value d-flex align-items-start">{{ carData.email }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Phone</h5>
                        <h5 class="value d-flex align-items-start">{{ carData.phone }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Frequency</h5>
                        <h5 class="value d-flex align-items-start">{{ capitalizeFirst(policy.duration) }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Insurance Plan</h5>
                        <h5 class="value d-flex align-items-start">{{ policy.plan }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Insurance Type</h5>
                        <h5 class="value d-flex align-items-start">Auto Insurance</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Amount</h5>
                        <h4 class="value d-flex align-items-start">NGN {{ formatAmount(policy.amount) }}</h4>
                    </b-row>
                </b-col>
            </b-card>
            <br>
            <button v-if="policy" @click="$router.push('/paymentType')" class="mt-3 py-2 col-md-3 purchase-btn">Pay NGN {{ formatAmount(policy.amount) }}</button>
        </div>  

    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
export default {
    name:"InsuranceReview",
    components:{
        HeaderComponent,
        BackButton,
        PageDescription,
    },
    data() {
        return {
            carData: null,
            policy: null          
        }
    },
    methods: {
        capitalizeFirst(string){
            return string.charAt(0).toUpperCase() + string.slice(1)
        },
        formatAmount(amount){
            return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    mounted(){
        if(localStorage.getItem('carData')){
            this.carData = JSON.parse(localStorage.getItem('carData'));
        }
        if(localStorage.getItem('policy')){
            this.policy = JSON.parse(localStorage.getItem('policy'));
        }
    }
}
</script>

<style scoped>
.title{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #5E626A;
}
.value{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.2px;
    color: #030124;
}
.purchase-btn{
    background-color: #1A1AFF;
    border-radius: 8px;
    border: 0;
    color: #ffffff;
}

</style>