<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isMenuOpen = ref(false) // State for mobile menu

const toggleLang = () => {
  locale.value = locale.value === 'en' ? 'km' : 'en'
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
    <div class="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">

      <RouterLink to="/" class="group flex items-center font-mono font-bold text-xl tracking-tight text-gray-900 hover:text-indigo-600 transition pr-2">
        <span>rotana</span>
        <span class="max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-500 ease-linear whitespace-pre text-indigo-600">&nbsp;pheakdey</span>
        <span class="animate-pulse text-indigo-600">_</span>
      </RouterLink>

      <div class="hidden md:flex items-center gap-6">
        <div class="flex gap-6 text-sm font-medium text-gray-500">
          <RouterLink to="/" active-class="text-indigo-600" class="hover:text-indigo-600 transition">{{ $t('nav.home') }}</RouterLink>
          <RouterLink to="/projects" active-class="text-indigo-600" class="hover:text-indigo-600 transition">{{ $t('nav.projects') }}</RouterLink>
          <RouterLink to="/about" active-class="text-indigo-600" class="hover:text-indigo-600 transition">{{ $t('nav.about') }}</RouterLink>
          <RouterLink to="/contact" active-class="text-indigo-600" class="hover:text-indigo-600 transition">{{ $t('nav.contact') }}</RouterLink>
        </div>
        <button @click="toggleLang" class="w-8 h-8 flex items-center justify-center text-lg border border-gray-200 rounded-full hover:bg-gray-50 transition shadow-sm">
          <span v-if="locale === 'en'">🇺🇸</span><span v-else>🇰🇭</span>
        </button>
      </div>

      <div class="md:hidden flex items-center gap-4">
        <button @click="toggleLang" class="text-lg"><span v-if="locale === 'en'">🇺🇸</span><span v-else>🇰🇭</span></button>

        <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600 focus:outline-none">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-20 px-6 py-4 flex flex-col gap-4 shadow-lg">
      <RouterLink to="/" @click="closeMenu" active-class="text-indigo-600" class="text-gray-600 font-medium py-2 border-b border-gray-50">{{ $t('nav.home') }}</RouterLink>
      <RouterLink to="/projects" @click="closeMenu" active-class="text-indigo-600" class="text-gray-600 font-medium py-2 border-b border-gray-50">{{ $t('nav.projects') }}</RouterLink>
      <RouterLink to="/about" @click="closeMenu" active-class="text-indigo-600" class="text-gray-600 font-medium py-2 border-b border-gray-50">{{ $t('nav.about') }}</RouterLink>
      <RouterLink to="/contact" @click="closeMenu" active-class="text-indigo-600" class="text-gray-600 font-medium py-2">{{ $t('nav.contact') }}</RouterLink>
    </div>
  </nav>
</template>
