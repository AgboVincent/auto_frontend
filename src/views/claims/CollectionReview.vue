<template>
    <div>
         <loading v-if="showLoading"/>
         <header-component title="Insurance Claims"></header-component>
         <div class="col">
             <back-button></back-button>
             <page-description title="Claims Review"
                               subtitle="Review claims details before submission">
             </page-description>

              <b-card>
                <b-col v-if="claimsData">
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Accident Date</h5>
                        <h5 class="value d-flex align-items-start text-justify">{{ capitalizeFirst(claimsData.date) }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Accident Time</h5>
                        <h5 class="value d-flex align-items-start text-justify">{{ claimsData.time }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Accident Location</h5>
                        <h5 class="value d-flex align-items-start text-justify">{{ capitalizeFirst(claimsData.location) }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Landmark</h5>
                        <h5 class="value d-flex align-items-start text-justify">{{ capitalizeFirst(claimsData.landmark) }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Accident Type</h5>
                        <h5 class="value d-flex align-items-start text-justify">{{ claimsData.accident_type[0].name }}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title d-flex align-items-start">Accident Description</h5>
                        <h5 class="value d-flex align-items-start text-justify">{{capitalizeFirst(claimsData.description) }}</h5>
                    </b-row>
                   
                </b-col>
            </b-card>
            <custom-button @click="submitClaim" type="submit" title="Submit claim"></custom-button>

         </div>
    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import CustomButton from "@/components/CustomButton.vue";
import Collection from '@/services/collection.js';
import Loading from '@/components/Loading.vue';
export default {
    name: "CollectionReview",
    components: {
        HeaderComponent,
        BackButton,
        PageDescription,
        CustomButton,
        Loading 
    },
    data() {
        return {
            claimsData: null,
            collection: new Collection(),
            showLoading: false,
            quotes: []
        }
    },
    methods: {
        capitalizeFirst(string){
            return string.charAt(0).toUpperCase() + string.slice(1)
        },
        submitClaim(){
            this.showLoading = true;
            this.claimsData.id = localStorage.id;
            this.claimsData.policy_id = localStorage.policy_id;
            this.claimsData.damages = JSON.parse(localStorage.getItem('damages'));
            this.collection.submitClaims(this.claimsData, this.quotes)
                .then(response =>{
                    console.log(response.data);
                    localStorage.setItem('imageClaims', false);
                    localStorage.setItem('videoUrlClaims', false);
                    localStorage.setItem('collectionData', JSON.stringify({}));
                    localStorage.setItem('quotes', JSON.stringify([]));
                    localStorage.setItem('damages', JSON.stringify([]));
                    this.$router.push('/claimsSuccess').catch(() => {}); 
                })
                .catch(e => {
                    console.log(e)
                })
                .finally(()=>{
                    this.showLoading = false;
                });

        }
    },
    mounted(){
         if(localStorage.getItem('collectionData')){
            this.claimsData = JSON.parse(localStorage.getItem('collectionData'));
        }

        if(localStorage.getItem('quotes')){
            this.quotes = JSON.parse(localStorage.getItem('quotes'));
        }
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

</style>