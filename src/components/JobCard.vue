<template>
  <div class="job-card col-md-3 m-2">
    <div class="card elevation-3 mx-4 my-2" style="width: 18rem">
     
      <div class="card-body">
        <div class="border-bottom border-dark border-3 text-primary">
          <h5>{{job.jobTitle}}</h5>
        </div>
        <div class="d-flex justify-content-end text-shadow mt-2 text-info">
          <h6>{{job.company}}</h6>
        </div>
        <div class="text-danger mt-2">
          <p
            >{{job.description}}</p
          >
        </div>
        <div class="text-secondary mt-2">
          <p
            >hours: {{job.hours}}  </p
          >
          <p> rate: {{job.rate}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Job } from '../models/Job.js';

export default {
  props: {
    job: { type: Job, required: true },
  },

  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
