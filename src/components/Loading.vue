<template>
    <div>
        <h3>
        <i class="spinner-border mt-3" role="status">
        </i>
        </h3>
    </div>
</template>


<script>
export default {
    name: "LoadingSpinner",
    
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