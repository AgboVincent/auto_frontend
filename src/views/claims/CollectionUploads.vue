<template>
    <div>
         <header-component title="Insurance Claims"></header-component>
         <div class="col">
             <back-button></back-button>
             <page-description title="Upload damaged file part"
                               subtitle="Follow instructions below to upload your files">
             </page-description>
             <b-card class="card-style mb-3"  @click="openVideo = true">
                    <div class="row px-3">
                        <input v-model="videoUrl" class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <h6>Video recording of the damaged part</h6>
                    </div>
                </b-card>
                <b-card class="card-style mb-3" @click="handleType('engine')">
                    <div class="row px-3">
                        <input v-model="imageUrl" class="mb-2 mr-3" type="checkbox" aria-label="Checkbox for following text input">
                        <h6>Upload image of the damaged part</h6>
                    </div>
                </b-card>
                <br>
                <h5 class=" view d-flex align-items-start">Upload another image</h5>
                 <custom-button type="submit" title="Continue" @click="$router.push('/collectionReview')"></custom-button>
         </div>
    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import CustomButton from "@/components/CustomButton.vue";
export default {
    name: "CollectionsUploads",
    components: {
        HeaderComponent,
        BackButton,
        PageDescription,
        CustomButton
    },
    data() {
        return {
            imageUrl: null,
            videoUrl: null
        }
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