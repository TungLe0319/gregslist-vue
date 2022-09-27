<template>
  <div class="car-card col-md-3">
 <div class="card   elevation-3 mx-4 my-2 " style="width:18rem;">
            <div class="d-flex justify-content-center">
              <img :src="car.imgUrl" alt=""
                class="img-fluid rounded mt-2 elevation-4 forcedimg ">
            </div>
            <div class="card-body ">
              <div class="border-bottom border-dark border-3 d-flex justify-content-between">
                <h5>{{car.make}}</h5>|
                <h5>{{car.model}}</h5>
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
.forcedimg{
  height: 200px;
  width: 260px;
  object-fit: cover;
}
</style>