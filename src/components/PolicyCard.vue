<template>
    <div class="mx-3">
        <b-card style="width: 18rem;">
            <div class="col">
                <div class="row">
                    <div>
                        <img src="../assets/hino.png" >
                    </div>
                    <div class="col">
                        <h6 class="d-flex align-items-start">{{ policy.name }}</h6>
                        <span class="d-flex align-items-start">ABJ8290YY</span>
                    </div>          
                </div>
             <hr class="">
             <b-row>
                 <b-col>
                     <span style="font-size:14px" class="d-flex align-items-start">Policy ends</span>
                    <h6 style="font-size:14px" class="d-flex align-items-start">{{ lastDay }}</h6>
                 </b-col>
                 <b-col>
                     <span style="font-size:14px; width:90px" class="d-flex align-items-start">Next Payment</span>
                     <h6 style="font-size:14px" class="d-flex align-items-start">{{ firstDay }}</h6>
                 </b-col>
             </b-row>
            </div>
        </b-card>
    </div>
</template>

<script>
    export default{
        name: "PolicyCard",
        props:{
            policy: Object
        },
        data(){
            return{
                firstDay: null,
                lastDay: null

            }
        },
        mounted(){
            var date = new Date();
            this.firstDay = new Date(date.getFullYear(), date.getMonth()+1, 1).toDateString();
            this.lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).toDateString();
        console.log(this.firstDay);
        console.log(this.lastDay);
        }
    }
</script>


<style scoped>

</style>