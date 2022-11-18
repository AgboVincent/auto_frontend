<template>
    <div>
        <loading v-if="showLoading"/>
        <header-component title="Insurance Claims"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Make Auto Insurance claims"
                              subtitle="Enter your email address and proceed">
            </page-description>
            <form @submit.stop.prevent="verifyUser" class="row g-3 mx-1">
                <div class="input-group input-group-md py-3">
                    <input v-model="email" placeholder="Email address" type="text" class="form-control" 
                    aria-label="Sizing example input"  id="validationDefault02" required>
                </div>  
                 <br>
                <div style = "width:100%" class="md" v-if="policies">
                    <label class="d-flex align-items-start">Select Policy</label>
                    <b-card v-for="policy in policies" :key="policy.id" class="col-md mb-3" @click="policyStatus(policy)">
                        <b-row>
                            <div>
                                <img src="../../assets/hino.png" >
                            </div>
                            <div class="col">
                                <h6 class="d-flex align-items-start">{{ policy.purchased_policy  }}</h6>
                                <span class="d-flex align-items-start">ABJ8290YY</span>
                            </div>          
                        </b-row>
                    </b-card>   
                </div> 

                <custom-button v-show="!policies" type="submit" title="Continue"></custom-button>
            </form>   
            
        </div>

    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import CustomButton from "@/components/CustomButton.vue";
import PreEvaluation from '@/services/pre_evaluation.js';
import Loading from '@/components/Loading.vue';
import {showError} from "@/helpers/alerts";
export default {
    name: "ClaimsIntro",
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
            policies: null,
            preEvaluation: new PreEvaluation(),
            showLoading: false,
        }
    },
    methods: {
        verifyUser() {
            this.showLoading = true;
            this.preEvaluation.getUserPolicyList(this.email) 
            .then(response =>{
                if(response.data.length === 0){
                    showError('Error', "Kindly purchase a policy")
                    return;
                }
                this.policies = response.data;
                
            })
            .catch(e =>{
               showError('Error', e)
            })
             .finally(()=>{this.showLoading = false});
            
        },
        policyStatus(policy){
            if(policy.evaluation_status === "Approved"){
                localStorage.id = policy.pre_evaluation_id;
                localStorage.policy_id = policy.policy_id;
                this.$router.push('/claims')               
            }
            else{
                showError('Error', "Your policy has not been approved")
            }

        }
    },
}
</script>