<template>
    <div>
         <loading v-if="showLoading"/>
        <header-component title="Purchase Policy"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Complete Payment"
                              subtitle="Enter your email address and proceed">
            </page-description>
            <form @submit.stop.prevent="verifyEmail" class="row g-3 mx-1">
                <div class="input-group input-group-md py-3">
                    <input v-model="email" placeholder="Email address" type="text" class="form-control" 
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
import PageDescription from "@/components/PageDescription.vue";
import CustomButton from "../components/CustomButton.vue";
import PreEvaluation from '@/services/pre_evaluation.js';
import Loading from '@/components/Loading.vue';
import {showError, showSuccess} from "@/helpers/alerts";
export default {
    name:"MakePayment",
    components: {
        HeaderComponent,
        BackButton,
        PageDescription,
        CustomButton,
        Loading
    },
    data() {
        return {
            email: null,
            carData: null,
            policy: null,
            preEvaluation: new PreEvaluation(),
            showLoading: false   
            
        }
    },
    methods: {
        verifyEmail(){
            this.showLoading = true;
            this.preEvaluation.getUserPolicyStatus(this.email) 
            .then(response =>{
                console.log(response)
                if(response.data.evaluation_status === "Approved"){
                    this.makePayment();
                }
                else if(response.data.evaluation_status === "Pending"){
                    showSuccess('Your submitted data is currently being processed');
                }
                else if (response.data.evaluation_status === "Rejected"){
                    showSuccess('Your policy has been rejected please submit another request');
                }
            })
            .catch(e =>{
               showError('Error', e)
            })
             .finally(()=>{this.showLoading = false});

        },
        makePayment() {
        this.$launchFlutterwave({
            tx_ref: Date.now(),
            amount: this.policy.amount,
            currency: 'NGN',
            payment_options: 'card,mobilemoney,ussd',
            customer: {
            email: this.carData.email,
            phonenumber: this.carData.phone,
            name: this.carData.name
            },
            acceptMpesaPayment: false,
            callback: function(data) {
            // specified callback function
            console.log(data)
            },
            customizations: {
            title: 'My store',
            description: 'Payment for items in cart',
            logo: 'https://assets.piedpiper.com/logo.png'
            }
        })
        },
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

</style>