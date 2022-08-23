<template>
  <div class="about">
    <header-component></header-component>
    <custom-button title="Continue"></custom-button>
  </div>
</template>


<script>
import CustomButton from "../components/CustomButton.vue";
import HeaderComponent from '../components/Header.vue';
  export default{
    //name: "About",
    components: {CustomButton, HeaderComponent}
    
  }
</script>