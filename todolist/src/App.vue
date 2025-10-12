<script setup>

</script>

<template>
  <div class="app-container">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Редактор
            заметок</a>
          <button class="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse"
               id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/"><i
                    class="bi-house"></i> Главная</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/rating"><i
                    class="bi-star"></i> Оценить</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about"><i
                    class="bi-person-circle"></i> Об авторе</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
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
