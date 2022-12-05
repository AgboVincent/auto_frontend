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
import MakePayment from '../views/MakePayment.vue'
import PolicySuccess from '../views/PolicySuccess.vue'
import ClaimsIntro from '../views/claims/ClaimsStepOne.vue'
import ClaimsForm from '../views/claims/ClaimsForm.vue'
import CollectionSteps from '../views/claims/CollectionSteps.vue'
import CollectionsUploads from '../views/claims/CollectionUploads.vue'
import CollectionReview from '../views/claims/CollectionReview.vue'
import ClaimsSuccess from '../views/claims/ClaimsSuccess.vue'
import AddQuotes from '../views/claims/AddQuotes.vue'
import DamageDetection from '../views/detection/DamageDetection.vue'
import AddDamage from '../views/detection/AddDamage.vue'
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
    path: '/makePayment',
    name: 'makePayment',
    component: MakePayment
  },
  {
    path: '/policySuccess',
    name: 'policySuccess',
    component: PolicySuccess
  },
   //collection
   {
    path: '/claimsIntro',
    name: 'claimsIntro',
    component: ClaimsIntro
  },
  {
    path: '/claims',
    name: 'claims',
    component: ClaimsForm
  },
  {
    path: '/collectionSteps',
    name: 'collectionSteps',
    component: CollectionSteps
  },
  {
    path: '/collectionUploads',
    name: 'collectionUploads',
    component: CollectionsUploads
  },
  {
    path: '/quotes',
    name: 'addQuotes',
    component: AddQuotes
  },
  {
    path: '/collectionReview',
    name: 'collectionReview',
    component: CollectionReview
  },
  {
    path: '/claimsSuccess',
    name: 'claimsSuccess',
    component: ClaimsSuccess
  },

  //detection
  {
    path: '/damageDetection',
    name: 'damageDetection',
    component: DamageDetection,
    props: true
  },
  {
    path: '/addDamage',
    name: 'addDamage',
    component: AddDamage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
