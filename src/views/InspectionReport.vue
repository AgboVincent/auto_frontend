<template>
    <div>
        <header-component title="Vehicle Inspection"></header-component>
        <div class="col">
            <back-button></back-button>
            <page-description title="Vehicle Inspection Report"
                              subtitle="Text Summary on inspection report.">
            </page-description>
            <b-card>
                <b-col>
                    <b-row class="justify-content-between">
                        <b-col>
                            <h5 class="title d-flex align-items-start">Vehicle Brand</h5>
                            <h5 class="value d-flex align-items-start">Honda</h5>
                        </b-col>
                        <b-col>
                            <h5 class="title d-flex justify-content-end">Vehicle Brand</h5>
                            <h5 class="value d-flex justify-content-end">Honda</h5>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row class="justify-content-between">
                        <b-col>
                            <h5 class="title d-flex align-items-start">Color</h5>
                            <h5 class="value d-flex align-items-start">Blue</h5>
                        </b-col>
                        <b-col>
                            <h5 class="title d-flex justify-content-end">Year</h5>
                            <h5 class="value d-flex justify-content-end">2014</h5>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row class="justify-content-between">
                         <b-col>
                             <h5 class="title d-flex align-items-start">VIN</h5>
                             <h5 class="value d-flex align-items-start">5FNYF8H9XKB005522</h5>
                        </b-col>
                    </b-row>
                </b-col>
            </b-card>
            <br>
            <b-card>
                <b-col>
                    <b-row class="justify-content-between">
                        <h5 class="title">Bumper</h5>
                        <h5 class="good">Good Condition</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title">Rear View</h5>
                        <h5 class="severe">Severe</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title">Left View</h5>
                        <h5 class="severe">Sever</h5>
                    </b-row>
                    <b-row class="justify-content-between">
                        <h5 class="title">Right View</h5>
                        <h5 class="fair">Fair</h5>
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