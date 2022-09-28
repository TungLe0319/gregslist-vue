<template>
  <div class="container">
   <div class="row justify-content-center scrollme">

<carCard v-for="car in cars" :key="car.id" :car="car"/>

<houseCard v-for="h in houses" :key="h.id" :house="h" />

<jobCard  v-for="j in  jobs" :key="j.id" :job="j" />

</div> 

  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState.js"
import { carsService } from "../services/CarsService.js"
import { housesService } from "../services/HousesService.js"
import { jobsService } from "../services/JobsService.js"
import Pop from "../utils/Pop.js"

export default {

  setup(){
async function getCars(){
  try {
      await carsService.getCars()
    } catch (error) {
      console.error('[]',error)
    Pop.error(error)
    }
}
getCars()

async function getHouses(){
  try {
      await  housesService.getHouses()
    } catch (error) {
      console.error('[]',error)
      Pop.error(error)
    }
    
}
// getHouses()

async function getJobs(){
  try {
      await jobsService.getJobs()
    } catch (error) {
      console.error('[]',error)
      Pop.error(error)
    }
}
// getJobs()

    return{
cars:computed(()=> AppState.cars),
houses:computed(() => AppState.houses),
jobs:computed(() => AppState.jobs)
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
