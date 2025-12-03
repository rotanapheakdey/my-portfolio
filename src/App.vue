<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './views/AppHeader.vue' // <--- Import Header
import AppFooter from './views/AppFooter.vue' // <--- Import Footer
</script>

<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100">

    <AppHeader />

    <main class="max-w-5xl mx-auto px-6">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />
  </div>
</template>

<style>
/* Page Transition Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
