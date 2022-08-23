<template>
    <div class="mx-3">
        <b-card style="width: 18rem;">
            <div class="col">
                <div class="row">
                    <div>
                        <img src="../assets/hino.png" >
                    </div>
                    <div class="col">
                        <h6 class="d-flex align-items-start">Hino 258 Class 6</h6>
                        <span class="d-flex align-items-start">ABJ8290YY</span>
                    </div>          
                </div>
             <hr class="">
             <b-row>
                 <b-col>
                     <span style="font-size:14px" class="d-flex align-items-start">Policy ends</span>
                    <h6 style="font-size:14px" class="d-flex align-items-start">Aug 22, 2022</h6>
                 </b-col>
                 <b-col>
                     <span style="font-size:14px; width:90px" class="d-flex align-items-start">Next Payment</span>
                     <h6 style="font-size:14px" class="d-flex align-items-start">Aug 22,2022</h6>
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

        },
        data(){
            return{

            }
        }
    }
</script>


<style scoped>

</style>