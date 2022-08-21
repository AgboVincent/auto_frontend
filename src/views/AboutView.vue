<template>
  <div class="about">
    <h1>This is an about page</h1>
    <custom-button :title="Continue"></custom-button>
  </div>
</template>


<script>
import CustomButton from "../components/CustomButton.vue";
  export default{
    //name: "About",
    components: {CustomButton}
    
  }
</script>