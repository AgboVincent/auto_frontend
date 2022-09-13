<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Insurance Review"
                              subtitle="Text on insurance review">
            </page-description>
            <b-card>
                <b-col>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Full name</h5>
                        <h5 class="value d-flex align-items-start">Zainab Yahaya</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Email</h5>
                        <h5 class="value d-flex align-items-start">zainab@gmail.com</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Phone</h5>
                        <h5 class="value d-flex align-items-start">0904443322</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Frequency</h5>
                        <h5 class="value d-flex align-items-start">Monthly</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Insurance Plan</h5>
                        <h5 class="value d-flex align-items-start">Policy A</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Insurance Type</h5>
                        <h5 class="value d-flex align-items-start">Auto Insurance</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Amount</h5>
                        <h4 class="value d-flex align-items-start">NGN 4,000</h4>
                    </b-row>
                </b-col>
            </b-card>
            <br>
            <button @click="$router.push('/paymentType')" class="mt-3 py-2 col-md-3 purchase-btn">Pay NGN 4,000</button>
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
            
        }
    },
    methods: {
        name() {
            
        },
    },
    mounted(){
        
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