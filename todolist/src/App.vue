<script setup>

</script>

<template>
  <div class="app-container">
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav class="flex flex-row">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/rating">Go to About</RouterLink>
    </nav>
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.main-content {
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

</style>
