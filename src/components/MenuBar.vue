<template>
  <nav id="mainNav" class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm min-column-width">
    <div class="container px-5">
      <router-link class="navbar-brand fw-bold" to="/">NEMO</router-link>
      <button aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
              class="navbar-toggler"
              data-bs-target="#navbarResponsive"
              data-bs-toggle="collapse"
              type="button">
        Menu
        <i class="bi-list"></i>
      </button>
      <div id="navbarResponsive" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
          <li class="nav-item">
            <router-link class="nav-link me-lg-3" to="/configurenemo">Settings</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-lg-3" to="/">Run Nemo</router-link>
          </li>
          <li v-if="!checkStatus()" class="nav-item">
            <router-link class="nav-link me-lg-3" to="/results">Results</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-lg-3" to="/howtouse">How To Use</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link me-lg-3" to="/aboutus">About Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {store} from "@/store";
export default {
  methods: {
    checkStatus() {
      /**
       * Function to check the status of the post request.
       */
      return store.state.result_images.length === 0;
    }
  }
}
</script>