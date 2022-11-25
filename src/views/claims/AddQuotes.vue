<template>
    <div>
        <header-component title="Insurance Claims"></header-component>
        <quote-items v-if="showQuotes" @hideItems="showQuotes = false"></quote-items>
        <div v-else class="col">
            <back-button></back-button>
            <page-description title="Add Quote Item"
                              subtitle="Enter your quotes for damaged parts">
            </page-description>
            <form @submit.stop.prevent="addItem" class="row g-3 mx-1">                    
                <div class="input-group mb-3">
                    <select  v-model="data.name" class="custom-select" id="validationDefault03" required>
                        <option :value="data.id" disabled>Select item name</option>
                        <option v-for="item in damageTypes.quoteList" :key="item.id" :value="item">{{item}}</option>    
                    </select>
                </div>

                <div class="input-group input-group-md mb-3">
                    <input v-model="data.quantity" placeholder="Enter Quantity" type="number" class="form-control"
                      aria-label="Sizing example input" id="validationDefault06" required >
                </div>

                 <div class="input-group input-group-md mb-3">
                    <input v-model="data.amount" placeholder="Enter Amount" type="number" class="form-control"
                      aria-label="Sizing example input" id="validationDefault06" required >
                </div>
            
                <custom-button  type="submit" title="Add item"></custom-button>
            </form>

        </div>

    </div>
</template>

<script>
import DamageTpyes from '@/services/damage_types.js';
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import CustomButton from "@/components/CustomButton.vue";
import QuoteItems from './QuoteItems.vue';
export default {
    name:"AddQuotes",
    components: {
        HeaderComponent,
        BackButton,
        PageDescription,
        CustomButton,
        QuoteItems,
    },
    data() {
        return {
             damageTypes: new DamageTpyes(),
             data: {},
             quotes: [],
             showQuotes: false
        }
    },
    methods: {
        addItem() {
            this.quotes = JSON.parse(localStorage.getItem("quotes") || "[]");
            this.quotes.push(this.data);
            localStorage.setItem("quotes", JSON.stringify(this.quotes));
            this.showQuotes = true;
            this.data = {};
        },
    },
    
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

</style>