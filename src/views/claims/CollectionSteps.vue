<template>
    <div>
        <header-component title="Insurance Claims"></header-component>
        <div class="col">
             <back-button></back-button>
             <page-description title="Photos of Incident"
                               subtitle="Follow instructions below to upload your files">
             </page-description>
             <b-card>
                 <div class="col">
                     <div class="row px-3 py-2">
                        <div>
                            <img src="../../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6  class="text-justify mt-1">Make sure the environment for capture is well lit.</h6>
                        </div>
                    </div>
                    <div class="row px-3 py-2">
                        <div>
                            <img src="../../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6  class="text-justify mt-1">Record the video of your vehicle in the well-lit environment.</h6>
                        </div>
                    </div>
                    <div class="row px-3 py-2">
                        <div>
                            <img src="../../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6 class="text-justify mt-1">The Video should not be longer than 30 seconds</h6>
                        </div>
                    </div>
                    <div class="row px-3 py-2">
                        <div>
                            <img src="../../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6  class="text-justify mt-1">Record the video of your vehicle starting from the VIN</h6>
                        </div>
                    </div>
                    <div class="row px-3 py-2">
                        <div>
                            <img src="../../assets/coin.png">
                        </div>
                        <div class="col">
                            <h6  class="text-justify mt-1">The Recorded video should capture the plate number</h6>
                        </div>
                    </div>
                 </div>
             </b-card>
        </div>
         <custom-button type="submit" title="Continue" @click="$router.push('/collectionUploads')"></custom-button>
    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import CustomButton from "@/components/CustomButton.vue";
export default {
    name:"CollectionSteps",
    components: {
        HeaderComponent,
        BackButton,
        PageDescription,
        CustomButton
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>

</style>