<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/cw-logo.png" height="45" />
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link
            :to="{ name: 'Home' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
          Cars
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Houses' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            Houses
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Jobs' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            Jobs
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Selected' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            SelectedItem
          </router-link>
        </li>
      </ul>
      <div class="me-3">
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#formOffCanvas" aria-controls="formOffCanvas">
  Add
</button>
      </div>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
