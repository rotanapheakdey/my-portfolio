<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n' // Import hook

const { locale } = useI18n() // Access current language

const toggleLang = () => {
  locale.value = locale.value === 'en' ? 'km' : 'en'
}
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
    <div class="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">

      <RouterLink to="/" class="group flex items-center font-mono font-bold text-xl tracking-tight text-gray-900 hover:text-indigo-600 transition pr-2">
        <span>rotana</span>
        <span class="max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-500 ease-linear whitespace-pre text-indigo-600"> pheakdey</span>
        <span class="animate-pulse text-indigo-600">_</span>
      </RouterLink>

      <div class="flex items-center gap-6">
        <div class="hidden md:flex gap-6 text-sm font-medium text-gray-500">
          <RouterLink to="/" active-class="text-indigo-600" class="hover:text-indigo-600 transition">{{ $t('nav.home') }}</RouterLink>
          <RouterLink to="/projects" active-class="text-indigo-600" class="hover:text-indigo-600 transition">{{ $t('nav.projects') }}</RouterLink>
          <RouterLink to="/about" active-class="text-indigo-600" class="hover:text-indigo-600 transition">{{ $t('nav.about') }}</RouterLink>
          <RouterLink to="/contact" active-class="text-indigo-600" class="hover:text-indigo-600 transition">{{ $t('nav.contact') }}</RouterLink>
        </div>

        <button
          @click="toggleLang"
          class="text-xs font-bold border border-gray-200 rounded px-2 py-1 hover:bg-gray-50 transition"
        >
          {{ locale === 'en' ? '🇺🇸 EN' : '🇰🇭 KM' }}
        </button>
      </div>
    </div>
  </nav>
</template>
