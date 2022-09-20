<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Vehicle Inspection Report"
                              subtitle="Text Summary on inspection report.">
            </page-description>
            <b-card>
                <b-col v-if="carData">
                    <b-row class="justify-content-between">
                        <b-col>
                            <h5 class="title d-flex align-items-start">Vehicle Brand</h5>
                            <h5 class="value d-flex align-items-start">{{carData.brand}}</h5>
                        </b-col>
                        <b-col>
                            <h5 class="title d-flex justify-content-end">Vehicle Model</h5>
                            <h5 class="value d-flex justify-content-end">{{carData.model}}</h5>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row class="justify-content-between">
                        <b-col>
                            <h5 class="title d-flex align-items-start">Color</h5>
                            <h5 class="value d-flex align-items-start">{{carData.color}}</h5>
                        </b-col>
                        <b-col>
                            <h5 class="title d-flex justify-content-end">Year</h5>
                            <h5 class="value d-flex justify-content-end">{{carData.year}}</h5>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row class="justify-content-between">
                         <b-col>
                             <h5 class="title d-flex align-items-start">VIN</h5>
                             <h5 class="value d-flex align-items-start">{{ carData.chassis_number}}</h5>
                        </b-col>
                    </b-row>
                </b-col>
            </b-card>
            <br>
            <b-card>
                <b-col v-if="predictions">
                    <b-row class="justify-content-between">
                        <h5 class="title">Front</h5>
                        <h5 class="good">G{{predictions.front}}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title">Rear View</h5>
                        <h5 class="severe">{{predictions.rear}}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title">Right View</h5>
                        <h5 class="severe">{{predictions.right}}</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title">Left View</h5>
                        <h5 class="fair">{{predictions.left}}</h5>
                    </b-row>
                </b-col>
            </b-card>
            <custom-button @click="$router.push('/buyPolicy')" title="Submit inspection report"></custom-button>

        </div>

    </div>
</template>


<script>
import HeaderComponent from '@/components/Header.vue'
import CustomButton from "@/components/CustomButton.vue";
import BackButton from "@/components/BackButton.vue";
import PageDescription from "@/components/PageDescription.vue";
export default {
    name:"InspectionReport",
    components: {
        HeaderComponent,
        CustomButton,
        BackButton,
        PageDescription
    },
    data() {
        return {
            carData: null,
            predictions:null
        }
    },
    methods: {
        name() {
            
        },
    },
    mounted(){
        if(localStorage.getItem('carData')){
            this.carData = JSON.parse(localStorage.getItem('carData'));
        }
        if(localStorage.getItem('predictions')){
            this.predictions = JSON.parse(localStorage.getItem('predictions'));
        }
    }
    
}
</script>

//will use the formatter function to display colors based on the status
<style scoped>

.title{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #5E626A;
}
.value{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.2px;
    color: #030124;
}
.good{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: -0.2px;
    color: #06B856;
}
.severe{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: -0.2px;
    color: #EC2D20;
}
.fair{
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: -0.2px;
    color: #F28C30;
}

</style>