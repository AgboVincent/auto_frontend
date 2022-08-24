<template>
    <b-card>
        <div class="col">
            <page-description title="Policy A"
                              subtitle="This plan loerem ispum consectetur plan loerem ispum consectetur">
            </page-description>
            <b-row>
                <h4 class="price pr-1">NGN4,0000</h4>
                <h6 class="duration">/ month</h6>

            </b-row>
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
            
        }
    },
    methods: {
        name() {
            
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
</style>