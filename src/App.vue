<script setup>
import MenuBar from './components/MenuBar.vue'
import Footer from './components/nemo_footer.vue'
</script>

<template>
  <div>
    <MenuBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>
