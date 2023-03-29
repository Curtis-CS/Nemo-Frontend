<template>
  <div class="container min-column-width">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="https://github.com/SayBender/Nemo" target="_blank">
            <img alt="" class="icon_custom" src="/github.svg"/>
          </a>
        </li>
        <li class="nav-item">
          <a href="https://www.mdpi.com/2072-4292/14/16/3979" target="_blank">
            <img alt="" class="icon_custom" src="/publication.png"/>
          </a>
        </li>
      </ul>
      <p class="text-center text-muted">&copy; 2022 UNR - Senior Project - Team 15</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "nemo_footer"
}
</script>

<style scoped>
.icon_custom {
  width: 30px;
  height: 30px;
  margin-left: 1rem;
}
</style>