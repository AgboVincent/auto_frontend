<template>
    <div>
        <div class="mb-4">
            <h5  class="title d-flex align-items-start">{{title}}</h5> 
            <span class="font-weight-light d-flex align-items-start">{{subtitle}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"PageDescription",
    props: {
        title: String,
        subtitle: String
    }
    
}
</script>


<style scoped>
.title{
    color:#030124;
    font-weight: 500;
    font-size: 21px;        
}

</style>