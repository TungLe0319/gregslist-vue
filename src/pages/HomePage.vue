<template>
  <div class="container">
   <div class="row">

<carCard v-for="car in cars" :key="car.id" :car="car"/>

   </div> 
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState.js"
import { carsService } from "../services/CarsService.js"
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

    return{
cars:computed(()=> AppState.cars)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
