<template>
    <div>
       <div class="pb-2">
        <nav class="container-fluid-nav navbar navbar-light bg-light">
            <h5 class="d-flex text-center  mt-2">{{title}}</h5>
        </nav>
      </div>
    </div>   
</template>

<script>
export default{
    name:"HeaderComponent",
    components: {},
    props: {
        title: String
    },
    data(){
        return{

        }
    }
}  
</script>

<style scoped>

    
</style>