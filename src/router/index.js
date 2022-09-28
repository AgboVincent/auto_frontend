import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetStarted from '../views/GetStarted.vue'
import VehicleInspection from '../views/Inspection.vue'
import InspectionSteps from '../views/InspectionSteps.vue'
import UploadOptions from '../views/UploadOptions.vue'
import InspectionReport from '../views/InspectionReport.vue'
import BuyPolicy from '../views/BuyPolicy.vue'
import InsuranceReview from '../views/InsuranceReview.vue'
import PaymentType from '../views/PaymentType.vue'
import CardPayment from '../views/CardPayment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/getStarted',
    name: 'getStarted',
    component: GetStarted
  },
  {
    path: '/inspection',
    name: 'inspection',
    component: VehicleInspection
  },
  {
    path: '/inspectionSteps',
    name: 'inspectionSteps',
    component: InspectionSteps
  },
  {
    path: '/uploadOptions',
    name: 'uploadOptions',
    component: UploadOptions
  },
  {
    path: '/inspectionReport',
    name: 'inspectionReport',
    component: InspectionReport,
    props: true
  },
  {
    path: '/buyPolicy',
    name: 'buyPolicy',
    component: BuyPolicy
  },
  {
    path: '/insuranceReview',
    name: 'insuranceReview',
    component: InsuranceReview
  },
  {
    path: '/paymentType',
    name: 'paymentType',
    component: PaymentType
  },
  {
    path: '/cardPayment',
    name: 'cardPayment',
    component: CardPayment
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
