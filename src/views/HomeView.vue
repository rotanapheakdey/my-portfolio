<script setup>
</script>

<template>
  <div class="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">



    <!-- <div class="absolute top- right-0 w-full lg:w-[55%] h-full z-0">
      <img
        src="/src/profile-bw.jpg"
        alt="Rotana Pheakdey"
        class="w-full h-full object-cover object-top opacity-100 grayscale transition-all duration-700 hover:grayscale-0"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-transparent"></div>
    </div> -->
    <div class="absolute top-4 right-0 w-full lg:w-[55%] h-full z-0">
  <img
    src="/src/profile-bw.jpg"
    alt="Rotana Pheakdey"
    class="w-full h-full object-cover object-top opacity-100 grayscale transition-all duration-700 hover:grayscale-0"
  >
  <div class="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-transparent pointer-events-none"></div>
</div>

    <div class="absolute -z-10 top-[-10%] left-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>

    <div class="relative z-10 w-full lg:w-1/2 px-8 md:px-16 lg:pl-0 lg:pr-0 py-12 flex flex-col justify-center items-start">

      <h1 class="text-5xl md:text-5xl font-bold mb-2 text-gray-900 tracking-normal leading-normal">
        {{ $t('home.hi') }}
        <br class="hidden lg:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 pb-2">
          {{ $t('name.first') }}{{ $t('name.last') }}.
        </span>
      </h1>

      <p class="text-xl text-gray-600 mb-10 max-w-lg leading-loose">
        {{ $t('home.role') }}
      </p>

      <div class="flex gap-4">
        <RouterLink
          to="/projects"
          class="bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
        >
          {{ $t('home.btn_work') }}
        </RouterLink>
        <RouterLink
          to="/contact"
          class="border border-gray-200 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 text-gray-600 transition bg-white/80 backdrop-blur-sm"
        >
          {{ $t('home.btn_contact') }}
        </RouterLink>
      </div>
    </div>

  </div>
</template>
