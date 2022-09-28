<template>
  <div class="house-card col-md-3 mx-2 position-relative">
    <div class="card elevation-3 mx-4 my-2" style="width: 18rem">
      <div class="d-flex justify-content-center"  >
        <img
          :src="house.imgUrl"
          alt=""
          class="img-fluid rounded mt-2 elevation-4 forcedimg"
        />
      </div>
      <div class="card-body">
        <div class="">
          <h6>bedrooms: {{house.bedrooms}}</h6>
          <h6>bathrooms: {{house.bathrooms}}</h6>
          <h6>levels: {{house.levels}}</h6>
        </div>
        <div class="d-flex justify-content-between mt-2">
          <h6>year: {{house.year}}</h6>
        </div>
        <div>
          <small
            ></small
          >
        </div>
      </div>
    </div>
    <div class="position-absolute  end-50 top-0 p-2 bg-dark rounded selectable">
          <small>${{house.price}}</small>

    </div>
  </div>
</template>

<script>
import { House } from '../models/House.js';

export default {
  props: {
    house: { type: House, required: true },
  },
  setup(props ) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.forcedimg{
  height: 200px;
  width: 260px;
  object-fit: cover;
}

</style>
