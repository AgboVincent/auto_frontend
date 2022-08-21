<template>
  <div>
    <button class="col-md-6 custom-button">{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-button {
   background-color: #1A1AFF;
   border-radius: 8px;
   border: 0;
}
</style>
