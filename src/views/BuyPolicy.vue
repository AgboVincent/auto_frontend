<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Buy Policy"
                              subtitle="Text on purchase your policy">
            </page-description>
            <policy-type></policy-type>
        </div>    
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import PolicyType from '@/components/PolicyType.vue';
export default {
    name: "BuyPolicy",
    components:{
        HeaderComponent,
        BackButton,
        PageDescription,
        PolicyType
    },
    data(){
        return{

        }
    },
    methods: {
        name() {
            
        },
    },
    
}
</script>

<style scoped>

</style>