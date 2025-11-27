<script setup>
import { onMounted } from 'vue'
import { usePortfolioStore } from '../stores/portfolio'

const store = usePortfolioStore()

onMounted(() => {
  store.fetchProjects()
})
</script>

<template>
  <div class="py-12">
    <h2 class="text-4xl font-bold mb-10 text-gray-900">projects.</h2>

    <div v-if="store.loading" class="text-gray-500 animate-pulse">loading data...</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(project, index) in store.projects"
        :key="index"
        class="border border-gray-100 p-8 rounded-2xl bg-white transition-all duration-300 hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1"
      >
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-2xl font-bold text-gray-900">{{ project.title }}</h3>
        </div>

        <p class="text-gray-600 mb-6 leading-relaxed h-20 overflow-hidden">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tech in project.tech ? project.tech.split(',') : []"
            :key="tech"
            class="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-sm font-medium"
          >
            {{ tech.trim() }}
          </span>
        </div>

        <a
          :href="project.link"
          target="_blank"
          class="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-800 transition"
        >
          view code
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
