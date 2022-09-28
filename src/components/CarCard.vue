<template>
  <div class="car-card col-md-3 mx-2 position-relative">
 <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
            <div class="d-flex justify-content-center">
              <img :src="car.imgUrl" alt=""
                class="img-fluid rounded mt-2 elevation-4 forcedimg ">
            </div>
            <div class="card-body ">
              <div class="d-flex justify-content-between">
                <h6>make: {{car.make}}</h6>
                <h6>model: {{car.model}}</h6>
              </div>
              <div class=" mt-2">
                <h6>year: {{car.year}}</h6>
              </div>
              <div>
                <small><b>Description:   </b> {{car.description}}</small>
              </div>
            </div>
          </div>
<div class="position-absolute end-50 top-0 bg-dark rounded p-2 selectable">{{car.price}}</div>
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
.forcedimg{
  height: 200px;
  width: 260px;
  object-fit: cover;
}
</style>