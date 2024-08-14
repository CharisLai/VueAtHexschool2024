<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/lesson1">第一週課程內容</RouterLink> |
          <RouterLink to="/homework1">第一週作業</RouterLink> |
          <!--<RouterLink to="/week3">第三週作業</RouterLink> |-->
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
