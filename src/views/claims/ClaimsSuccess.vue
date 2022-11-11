<template>
    <div class="div-class">
        <img height="50px" src="../../assets/success_icon.png">
        <p>Congratulations</p>
        <p>Your Claims has been submitted successfully</p>
        <p>The admin will review your claims and reach</p>
        <p>out to you via an email sms</p>
        <br>
        <custom-button @click="$router.go(-6)" title="Continue"></custom-button>
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

</style>