<template>
  <div class="car-card">
 <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
            <div class="d-flex justify-content-center">
              <img :src="car.imgUrl" alt=""
                class="img-fluid rounded mt-2 elevation-4">
            </div>
            <div class="card-body ">
              <div class="border-bottom border-dark border-3">
                <h5>{{car.make}},{{car.model}}</h5>
              </div>
              <div class="d-flex justify-content-end text-shadow mt-2">
                <h6>PlaceHolder Text</h6>
              </div>
              <div>
                <small>Description :</small>
              </div>
            </div>
          </div>

  </div>
</template>


<script>
import { Car } from "../models/Car.js";

export default {
  props:{
car:{type:Car, required:true}
  },
  setup(props){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>