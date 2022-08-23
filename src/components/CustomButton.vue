<template>
    <div class="col-md-12">
        <button class="mt-5 py-2 col-md-3 custom-button">{{title}}</button>
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
   color: #ffffff;
}
</style>
