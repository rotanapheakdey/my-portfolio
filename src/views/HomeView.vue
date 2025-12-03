<script setup>
</script>

<template>
  <div class="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row">

    <div class="order-1 w-full lg:w-1/2 flex flex-col justify-center items-start px-6 md:px-16 lg:pl-16 lg:pr-0 py-12 bg-white relative z-10">

      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 tracking-normal leading-tight">
        {{ $t('home.hi') }}
        <br class="hidden lg:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 pb-2">
          {{ $t('name.first') }}{{ $t('name.last') }}.
        </span>
      </h1>

      <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-loose">
        {{ $t('home.role') }}
      </p>

      <div class="flex gap-4">
        <RouterLink
          to="/projects"
          class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
        >
          {{ $t('home.btn_work') }}
        </RouterLink>
        <RouterLink
          to="/contact"
          class="border border-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 text-gray-600 transition"
        >
          {{ $t('home.btn_contact') }}
        </RouterLink>
      </div>

      <div class="absolute -z-10 top-10 left-10 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
    </div>

    <div class="order-2 w-full lg:w-1/2 h-96 lg:h-auto relative bg-gray-100">
      <img
        src="/src/profile-bw.jpg"
        alt="Rotana Pheakdey"
        class="w-full h-full object-cover object-top opacity-100 grayscale hover:grayscale-0 transition-all duration-700"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
    </div>

  </div>
</template>
