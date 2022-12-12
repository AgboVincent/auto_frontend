<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Buy Policy"
                              subtitle="Select the policy you would like to buy">
            </page-description>
            <div v-for="policy in policies" :key="policy.id" class="mb-3">
                <policy-type :policy = policy></policy-type>
            </div>
        </div>    
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import PolicyType from '@/components/PolicyType.vue';
import PreEvaluation from '@/services/pre_evaluation.js';

export default {
    name: "BuyPolicy",
    components:{
        HeaderComponent,
        BackButton,
        PageDescription,
        PolicyType
    },
    data(){
        return{
            preEvaluation: new PreEvaluation(),
            policies: []
        }
    },
    methods: {
        getPolicies() {
            this.preEvaluation.getPolicies()
            .then(response =>{
                this.policies = response.data;
            })
            .catch(e =>{
            console.log(e)
            })          
        },
    },
    mounted(){
        this.getPolicies();
    }
    
}
</script>

<style scoped>

</style>