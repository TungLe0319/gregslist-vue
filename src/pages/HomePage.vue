<template>
  <div class="container">
   <div class="row justify-content-center scrollme">
<div class="  ">
<!-- Passing in entire object that is comprised of Listing type, Listing/ Seller had to drill down -->
  <carCard v-for="c in classified" :key="c.id" :car="c.listing" :seller="c.seller" />

</div>



</div> 

  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { onBeforeMount, onMounted } from "vue"
import { AppState } from "../AppState.js"
import { carsService } from "../services/CarsService.js"
import { classifiedService } from "../services/ClassifiedsService.js"
import { housesService } from "../services/HousesService.js"
import { jobsService } from "../services/JobsService.js"
import Pop from "../utils/Pop.js"

export default {

  setup(){

// async function getCars(){
//   try {
//       await carsService.getCars()
//     } catch (error) {
//       console.error('[]',error)
//     Pop.error(error)
//     }
// }

onMounted(()=>{
  // getCars()
getClassifieds()
})




 async function getClassifieds(){
try {
    await classifiedService.getClassifieds()
  } catch (error) {
    console.error('[getClassifieds]',error)
    Pop.error(error)
  }
    }

 
//NOTE Don't load UNTIL I get my cars
//  onBeforeMount(async () =>{
//   await getCars()
//  })



    return{
cars:computed(()=> AppState.cars),
classified: computed(()=> AppState.classifieds)
    }
  }
}
</script>

<style scoped lang="scss">
  ::-webkit-scrollbar{
    display: none;
  }
.scrollme{
  max-height: 100vh;
  overflow: auto;
}
</style>
