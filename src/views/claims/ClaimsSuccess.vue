<template>
    <div class="div-class">
        <img height="60px" src="../../assets/success_icon.png">
        <p class="title mt-2">Claim submitted successfully</p>
        <p class="mx-4 text-justify">Congratulations,Your Claims has been submitted successfully
        The admin will review your claims and reach
        out to you via an email sms</p>
        <br>
        <custom-button @click="$router.go(-6)" title="Okay, Got it"></custom-button>
    </div>
</template>


<script>
import CustomButton from "@/components/CustomButton.vue";
export default {
    name: "ClaimsSuccess",
    components: {
        CustomButton
    }
    
}
</script>

<style scoped>
.div-class {
        text-align:center;
        background-color: rgba(255,255,255, .9);
        z-index:99999;
        position: absolute;
        top: 30%;
        width: 100%;
    }
    .title{
    color:#030124;
    font-weight: 500;
    font-size: 21px;   
    font-family: 'Outfit';
    font-style: normal;  
}

</style>