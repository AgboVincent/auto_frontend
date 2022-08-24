<template>
    <div class="col-md-12 px-3">
        <b-card class="py-2"  :style="{backgroundColor:color}" @click="$emit('click')">
            <div class="row px-3">
                <div>
                    <img :src="require(`../assets/${leadingIcon}`)">
                </div>
                <div class="col">
                    <h6 class="d-flex align-items-start">{{title}}</h6>
                    <span class="d-flex align-items-start">{{subtitleOne}}</span>
                    <span class="d-flex align-items-start">{{subtitleTwo}}</span>
                </div>
                <div class="align-self-center">
                    <img src="../assets/arrow_forward.png">
                </div>
            </div>
        </b-card>
    </div>
</template>

<script>
    export default{
        name: "CardComponent",
        props:{
            leadingIcon: String,
            title: String,
            subtitleOne: String,
            subtitleTwo: String,
            color:String
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
.card-style{
    background-color:#DEEFFF ;
}

</style>