<template>
    <b-card>
        <div class="col">
            <page-description title="Policy A"
                              subtitle="This plan loerem ispum consectetur plan loerem ispum consectetur">
            </page-description>
            <b-row class="justify-content-between px-3">
                <div class="row px-3">
                    <h4 class="price pr-1">NGN4,0000</h4>
                    <h6 class="duration">/ month</h6>
                </div>
                <button v-if="details"  class="details-btn" @click="showDetails()">Details <img src="../assets/arrow_up.png"></button>
                <button v-if="!details" class="details-btn2" @click="showDetails()">Details <img src="../assets/arrow_down.png"></button>
            </b-row>
            <div v-if="details">
                <br>
                <div class="row px-3">
                    <input class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                    <h6>Lorem</h6>
                </div>
                <br>
                <div class="row px-3">
                    <input class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                    <h6>Lorem</h6>
                </div>
                <br>
                <div class="row px-3">
                    <input class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                    <h6>Lorem</h6>
                </div>
                <br>
                <h5 class=" view d-flex align-items-start">View more details</h5>
                <button @click="$router.push('/insuranceReview')" class="mt-3 py-2 col-md-3 purchase-btn">Purchase policy</button>
            </div>
        </div>       
    </b-card>
</template>


<script>
import PageDescription from './PageDescription.vue'
export default {
    name: "PolicyType",
    props:{
       policyTitle: String,
       policySubTitle: String,

    },
    components: { 
        PageDescription 
    },
    data() {
        return {
            details: false
        }
    },
    methods: {
        showDetails() {
            this.details = !this.details
        },
    },
    
}
</script>

<style scoped>
.price{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #030124;
}
.duration{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #7D8299;
}
.details-btn{
    border: 0;
    color: #6A2381;
    border-radius: 4px;
}
.details-btn2{
    border: 0;
    color: #1A1AFF;
    border-radius: 4px;
    background: rgba(26, 26, 255, 0.1);
}
.view{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
    color: #1A1AFF;
}
.purchase-btn{
    background-color: #1A1AFF;
    border-radius: 8px;
    border: 0;
    color: #ffffff;
}
</style>