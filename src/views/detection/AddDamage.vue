<template>
    <div>
        <b-modal
            id="addDamage"
            ref="modal"
            hide-footer
        >
        <div class="col">
            <page-description title="Include new body part"
                              subtitle="Make sure you provide the correct information">
            </page-description>
            <br>
            <form @submit.stop.prevent="storeData">
            <div class="input-group mb-3">
                <select  v-model="data.name" class="custom-select" id="validationDefault03" required>
                    <option :value="data.id" disabled>Select item name</option>
                    <option v-for="item in damageTypes.allDamages" :key="item.id" :value="item">{{item}}</option>    
                </select>
            </div>
             <br>
             <div lass="input-group mb-3">
                <select  v-model="data.damage" class="custom-select" id="validationDefault03" required>
                    <option :value="data.id" disabled>Select item name</option>
                    <option :value="'Damaged'">Damaged</option>   
                    <!-- <option :value="'Intact'">Intact</option>  
                    <option :value="'Fair Damage'">Fair Damage</option>    -->
                </select>
             </div>
            <custom-button type="submit" title="Continue"></custom-button>
            </form>
        </div>
        </b-modal>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue';
import BackButton from "@/components/BackButton.vue";
import CustomButton from "@/components/CustomButton.vue";
import PageDescription from "@/components/PageDescription.vue";
import DamageTpyes from '@/services/damage_types.js';
export default {
    name:"AddDamageModal",
    components: {
         HeaderComponent,
         BackButton,
         PageDescription,
         CustomButton,
    },
    data() {
        return {
            damageTypes: new DamageTpyes(),
            data: {},
        }
    },
    methods: {
        storeData() {
            this.$emit('newDamage', this.data.name)
            this.$bvModal.hide('addDamage')
        },
    },
}
</script>

<style scoped>

</style>