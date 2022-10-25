<template>
    <div>
        <h3>
        <i class="spinner-border mt-3" role="status">
        </i>
        </h3>
        <br>
        <p style="fontSize:14px; color:#00000" class="text-center">{{text}}</p>
        <img height="30px" src="../assets/small_logo_new.png">
 
    </div>
</template>


<script>
export default {
    name: "PredictionSpinner",
    data() {
        return {
            text: "Please wait..."
        }
    },
    methods: {
       setText() {
           setTimeout(()=>{
                   this.text = "This process of vetting your uploads can take a while";
                   this.waitText();      
            },5000)                     
        },
        waitText(){
            setTimeout(()=>{
                   this.text = "Your predictions results is around the corner"
               },20000) 
        }
    },
    mounted(){
        this.setText();
    }
    
}
</script>


<style scoped>
div {
        text-align:center;
        background-color: rgba(255,255,255, .9);
        z-index:99999;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
 h3 {
        position: relative;
        top: 50%;
    }
    
</style>