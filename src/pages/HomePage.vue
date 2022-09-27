<template>
  <div class="container-fluid">
   <div class="row">

<carCard/>

   </div> 
  </div>
</template>

<script>
import Pop from "../utils/Pop.js"

export default {

  setup(){
async function getCars(){
  try {
      
    } catch (error) {
      console.error('[]',error)
    Pop.error(error)
    }
}

    return{

    }
  }
}
</script>

<style scoped lang="scss">

</style>
