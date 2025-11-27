<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">
    <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div class="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
        <RouterLink
          to="/"
          class="group flex items-center font-mono font-bold text-xl tracking-tight text-gray-900 hover:text-indigo-600 transition pr-2"
        >
          <span>rotana</span>

          <span
            class="max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-500 ease-linear whitespace-pre text-indigo-600"
          >
            pheakdey</span
          >

          <span class="animate-pulse text-indigo-600">_</span>
        </RouterLink>

        <div class="flex gap-6 text-sm font-medium text-gray-500">
          <RouterLink to="/" active-class="text-indigo-600" class="hover:text-indigo-600 transition"
            >home</RouterLink
          >
          <RouterLink
            to="/projects"
            active-class="text-indigo-600"
            class="hover:text-indigo-600 transition"
            >projects</RouterLink
          >
          <RouterLink
            to="/about"
            active-class="text-indigo-600"
            class="hover:text-indigo-600 transition"
            >about</RouterLink
          >
          <RouterLink
            to="/contact"
            active-class="text-indigo-600"
            class="hover:text-indigo-600 transition"
            >contact</RouterLink
          >
        </div>
      </div>
    </nav>

    <main class="max-w-5xl mx-auto px-6 fade-enter-active">
      <RouterView />
    </main>

    <footer class="mt-20 py-10 text-center text-gray-400 text-xs uppercase tracking-widest">
      &copy; 2025. built with vue 3 & tailwind.
    </footer>
  </div>
</template>
