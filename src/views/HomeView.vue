<template>
  <div>
    <header-component title="Dashboard"></header-component>
    <br>
    <div class="px-3">
      <h4 style="color: #030124;" class="d-flex align-items-start">Hello there,</h4> 
      <span class="d-flex align-items-start">Welcome to Curacel Auto</span>
    </div>
    <br>
    <div class="row mx-3 justify-content-between">
      <h6 >Active Policies</h6>
      <button class="px-3 view-btn">View all <img src="../assets/arrow_forward_2.png"></button>
    </div>
    <br>
    <div class="py-2">
        <div class="d-flex flex-row flex-nowrap overflow-auto">
            <policy-card></policy-card>
            <policy-card></policy-card>
            <policy-card></policy-card>
        </div>

    </div>
    <br>
    <card-component leadingIcon="inspect_img.png"
                    title="Inspect your vehicle"
                    subtitleOne="Dis enim pulvinar ornare integer"
                    subtitleTwo="integer aliquam purus ultrices."
                    color="#DEEFFF"
                    @click="$router.push('/getStarted')"
    >
    </card-component>
    <br>
    <card-component leadingIcon="claim_img.png"
                    title="Make an insurance claim"
                    subtitleOne="Dis enim pulvinar ornare integer"
                    subtitleTwo="integer aliquam purus ultrices."
                    color="#F5EDFF"
    >
    </card-component>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/Header.vue'
import CardComponent from  '@/components/Card.vue';
import PolicyCard from  '@/components/PolicyCard.vue';
export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    CardComponent,
    PolicyCard
  },
  data(){
    return{

    }
  },
  methods: {

    
  },
  mounted(){
    
  }
}
</script>

<style scoped>
.view-btn{
  background-color: #F3F3FD;
  border: 0;
  border-radius: 8px;
  color: #1A1AFF;
  font-size: 14px;
}
  
</style>
