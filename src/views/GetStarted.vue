<template>
   <div id="body">
       <div class="container">  
           <div class="col">
               <div class="d-flex align-items-start">
                   <button class="close-btn px-2 my-5"  @click="$router.back()">
                     <img class="pb-1" src="../assets/close.png">  Close
                   </button>  
               </div>
               <div class="col-md-12">
                    <b-card class="py-2 card-style">
                        <div class="col">
                            <h4 style="color:#FFFFFF" class="d-flex align-items-start">Vehicle Inspection</h4>
                            <span style="color:#FFFFFF;" class="d-flex align-items-start text-justify">Automate your vehicle inspections operations with our AI powered inspection, reduce inspection time and streamline your processes.</span>
                        </div>
                    </b-card>
                </div>
                <div  class="fixed-bottom  mx-5 mb-5">
                   <button  class="py-2 col started-btn"
                            @click="$router.push('/inspection')"
                   >Start Inspection</button>
                </div>
           </div>                  
       </div>
   </div>
</template>

<script>
export default {
    name:"GetStarted",
    components:{},
    data(){
        return{

        }
    }
    
}
</script>


<style scoped>
.container{
  min-height: 100vh;
}
.close-btn{
    background-color: transparent;
    border: 0;
    color: #FFFFFF;
    font-size: 16px;
}
.card-style{
    background:rgba(255, 255, 255, 0.2);
    border: 1;
    border-color: #FFFFFF;
    box-shadow: 0px 56px 56px -16px rgba(0, 0, 0, 0.06);
}
.started-btn{
    border: 0;
    border-radius: 8px;
    align-self: flex-end;

}
    
</style>