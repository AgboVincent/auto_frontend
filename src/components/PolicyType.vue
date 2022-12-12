<template>
    <b-card @click="showDetails()">
        <div class="col">
            <page-description :title="policy.name"
                              :subtitle="policy.description">
            </page-description>
            <b-row class="justify-content-between px-3">
                <div class="row px-3">
                    <h4 class="price pr-1">NGN {{formatAmount(policy.amount)}}</h4>
                    <h6 class="duration">/ month</h6>
                </div>
                <button v-if="details"  class="details-btn" @click="detail = true">Details <img src="../assets/arrow_up.png"></button>
                <button v-if="!details" class="details-btn2" @click="detail = false">Details <img src="../assets/arrow_down.png"></button>
            </b-row>
            <div v-if="details">
                <br>
                <h6 class="py-2 d-flex align-items-start">Policy covers</h6>
                <div v-for="item in policy.items" :key="item.id">
                    <div class="row px-3">
                        <input class="mb-2 mr-3 policy-item" v-model="item.is_covered" type="checkbox" aria-label="Checkbox for following text input" @click="read($event)">
                        <h6>{{item.name}}</h6>
                    </div>
                </div>
                <br>
                <button @click="reviewPolicy()" class="mt-3 py-2 col-md-3 purchase-btn">Choose policy</button>
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
       policy: Object

    },
    components: { 
        PageDescription 
    },
    data() {
        return {
            details: false,
            data: {}
        }
    },
    methods: {
        showDetails() {
            this.details = !this.details
        },
        reviewPolicy(){
             this.data.amount = this.policy.amount;
             this.data.plan = this.policy.name;
             this.data.duration = this.policy.payment_duration;
             this.data.id = this.policy.id;
             localStorage.setItem('policy', JSON.stringify(this.data));
            this.$router.push('/insuranceReview');
        },
        formatAmount(amount){
            return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        read(e){
            e.preventDefault();
        }
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
.purchase-btn{
    background-color: #1A1AFF;
    border-radius: 8px;
    border: 0;
    color: #ffffff;
}
.policy-item{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #030124;
}
</style>