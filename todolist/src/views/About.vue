<script setup>
// Тут можно добавить любые данные, если хочешь динамически генерировать проекты
const projects = [
  {
    name: "McProtoNet",
    description: "Библиотека на C# для работы с протоколом Minecraft",
    link: "https://github.com/Titlehhhh/McProtoNet"
  },
  {
    name: "QuickProxyNet",
    description: "Библиотека на C# для подключения к прокси-серверам",
    link: "https://github.com/Titlehhhh/QuickProxyNet"
  }
]
</script>

<template>
  <div class="container my-5">
    <p class="lead">
      Я open-source разработчик, в основном пишу на C# и создаю полезные библиотеки и приложения.
    </p>

    <h2 class="mt-5 mb-3">Мои проекты</h2>

    <div class="row">
      <div class="col-md-6 mb-3" v-for="project in projects" :key="project.name">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="btn btn-outline-primary btn-sm">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card-title {
  font-weight: 600;
}
.card-text {
  font-size: 0.95rem;
}
</style>
