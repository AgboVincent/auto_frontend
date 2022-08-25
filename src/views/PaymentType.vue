<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Complete Payment"
                              subtitle="Select preferred payment method">
            </page-description>
            <b-card @click="$router.push('/cardPayment')">
                <b-row class="px-3">
                    <img src="../assets/card_payment.png" style="height:40px">
                    <b-col>
                        <h5 class="title d-flex align-items-start">Pay with card</h5>
                        <h4 class="value d-flex align-items-start">You can make payment from any of</h4>
                        <h4 class="value d-flex align-items-start">your debit cards.</h4>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
export default {
    name:"PaymentType",
    components:{
        HeaderComponent,
        BackButton,
        PageDescription

    }
}
</script>

<style scoped>
.title{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #121619
}
.value{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #5E626A;

}
</style>