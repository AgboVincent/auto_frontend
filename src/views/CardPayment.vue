<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
             <back-button></back-button>
              <h5  class="title d-flex align-items-start">Pay with card</h5> 
              <b-card>
                  <b-col>
                      <h6 class="d-flex align-items-start">Card number</h6>
                      <div class="input-group input-group-md">
                            <input placeholder="Card number" type="text" class="form-control" aria-label="Sizing example input" >
                      </div>
                  </b-col>
              </b-card>
              <br>
              <b-row class="justify-content-between px-3">
                  <b-card class="md w-50">
                      <h6 class="d-flex align-items-start">Expiration Date</h6>
                      <div class="input-group input-group-md">
                            <input placeholder="MM/YY" type="text" class="form-control" aria-label="Sizing example input" >
                      </div>
                  </b-card>
                  <b-card class="md w-50">
                      <h6 class="d-flex align-items-start">CCV</h6>
                      <div class="input-group input-group-md">
                            <input placeholder="CCV" type="text" class="form-control" aria-label="Sizing example input" >
                      </div>
                  </b-card>
              </b-row>
              <br>
              <button class="mt-3 py-2 col-md-3 purchase-btn">Make payment</button>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/Header.vue'
import BackButton from "@/components/BackButton.vue";
export default {
    name:"CardPayment",
    components:{
        HeaderComponent,
        BackButton
    }   
}
</script>

<style scoped>
.title{
    color:#030124;
    font-weight: 500;
    font-size: 21px;        
}
.purchase-btn{
    background-color: #1A1AFF;
    border-radius: 8px;
    border: 0;
    color: #ffffff;
}
</style>