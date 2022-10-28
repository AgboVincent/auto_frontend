<template>
    <div>
         <loading v-if="showLoading"/>
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
            <button v-if="policy" @click="submitAction()" class="mt-3 py-2 col-md-3 purchase-btn">Submit</button>
        </div>  

    </div>
</template>

//$router.push('/paymentType')
<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import PreEvaluation from '@/services/pre_evaluation.js';
import Loading from '@/components/Loading.vue';
export default {
    name:"InsuranceReview",
    components:{
        HeaderComponent,
        BackButton,
        PageDescription,
        Loading
    },
    data() {
        return {
            carData: null,
            policy: null,
            preEvaluation: new PreEvaluation(),
            showLoading: false          
        }
    },
    computed: {
        policyData() {
            return{
                id: localStorage.id,
                policy_id: this.policy.id,
                policy: this.policy.plan
            }
        },
    },
    methods: {
        capitalizeFirst(string){
            return string.charAt(0).toUpperCase() + string.slice(1)
        },
        formatAmount(amount){
            return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        
        submitAction(){
            this.showLoading = true;
            this.preEvaluation.chosePolicy(this.policyData)
            .then(resp=> {
                console.log(resp)
                localStorage.setItem('image', JSON.stringify({}));
                localStorage.setItem('images', JSON.stringify({}));
                localStorage.setItem('videoUrl', JSON.stringify(false));
                this.$router.push('/policySuccess').catch(() => {});          
            })
            .catch(error=>{
               console.log(error)
            })
            .finally(()=>{this.showLoading = false});

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