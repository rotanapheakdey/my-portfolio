<script setup>
import { onMounted } from 'vue'
import { usePortfolioStore } from '../stores/portfolio'

const store = usePortfolioStore()

// Fetch data from Google Sheets when page loads
onMounted(() => {
  store.fetchProjects()
})

// Helper function to color-code your tech stack badges
const getTechColor = (techName) => {
  const t = techName.toLowerCase().trim()

  if (t.includes('vue')) return 'bg-green-100 text-green-700 border-green-200'
  if (t.includes('react')) return 'bg-blue-100 text-blue-700 border-blue-200'
  if (t.includes('api') || t.includes('axios')) return 'bg-yellow-100 text-yellow-700 border-yellow-200'
  if (t.includes('tail') || t.includes('css')) return 'bg-cyan-100 text-cyan-700 border-cyan-200'
  if (t.includes('git') || t.includes('github')) return 'bg-orange-100 text-orange-700 border-orange-200'
  if (t.includes('sql') || t.includes('data')) return 'bg-purple-100 text-purple-700 border-purple-200'
  if (t.includes('js') || t.includes('javascript')) return 'bg-yellow-50 text-yellow-600 border-yellow-200'

  // Default gray for everything else
  return 'bg-gray-100 text-gray-600 border-gray-200'
}
</script>

<template>
  <div class="py-12">
    <h2 class="text-4xl font-bold mb-10 text-gray-900">projects.</h2>

    <div v-if="store.loading" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="n in 4"
        :key="n"
        class="border border-gray-100 p-8 rounded-3xl bg-white"
      >
        <div class="h-8 bg-gray-200 rounded-md w-1/2 mb-4 animate-pulse"></div>

        <div class="space-y-2 mb-6">
          <div class="h-4 bg-gray-100 rounded w-full animate-pulse"></div>
          <div class="h-4 bg-gray-100 rounded w-5/6 animate-pulse"></div>
        </div>

        <div class="flex gap-2 mb-8">
          <div class="h-6 w-16 bg-gray-100 rounded-md animate-pulse"></div>
          <div class="h-6 w-20 bg-gray-100 rounded-md animate-pulse"></div>
          <div class="h-6 w-12 bg-gray-100 rounded-md animate-pulse"></div>
        </div>

        <div class="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(project, index) in store.projects"
        :key="index"
        class="border border-gray-100 p-8 rounded-3xl bg-white transition-all duration-300 hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1"
      >
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-2xl font-bold text-gray-900">{{ project.title }}</h3>
        </div>

        <p class="text-gray-600 mb-6 leading-relaxed">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tech in project.tech ? project.tech.split(',') : []"
            :key="tech"
            :class="getTechColor(tech)"
            class="px-3 py-1 rounded-md text-sm font-medium border"
          >
            {{ tech.trim() }}
          </span>
        </div>

        <a
          :href="project.link"
          target="_blank"
          class="inline-flex items-center text-indigo-600 font-bold hover:underline"
        >
          view code
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
