<template>
    <div>
         <div class="col">
             <page-description title="Quotes"
                               subtitle="Review your quotes">
             </page-description>
             <div v-if="quotes">
                <b-card v-for="quote in quotes" :key="quote.id" class="mb-2" >
                <b-col>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Item name</h5>
                        <h5 class="value d-flex align-items-start text-justify">{{ quote.name }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Item Quantity</h5>
                        <h5 class="value d-flex align-items-start text-justify">{{ quote.quantity }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Item Amount</h5>
                        <h5 class="value d-flex align-items-start text-justify">{{ quote.amount }}</h5>
                    </b-row>
                </b-col>
                </b-card>
            </div>
            <br>
            <h5  @click="$emit('hideItems')" class=" view d-flex align-items-start">Add another item</h5>
            <custom-button @click="$router.push('/collectionReview')" type="submit" title="Continue"></custom-button>

         </div>

    </div>
</template>


<script>
import PageDescription from "@/components/PageDescription.vue";
import CustomButton from "@/components/CustomButton.vue";
export default {
    name: "QuoteItems",
    components: {
        PageDescription,
        CustomButton,
    },
    data() {
        return {
            quotes: []
        
        }
    },
    mounted(){
         if(localStorage.getItem('quotes')){
            this.quotes = JSON.parse(localStorage.getItem('quotes'));
        }
    }
    
}
</script>


<style scoped>
.view{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-decoration-line: underline;
    color: #1A1AFF;
}
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

</style>