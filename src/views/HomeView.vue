<script setup></script>

<template>
  <div class="min-h-[80vh] flex flex-col justify-center items-start relative">
    <div
      class="absolute -z-10 top-[-10%] right-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60"
    ></div>
    <div
      class="absolute -z-10 bottom-[10%] left-[-10%] w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-60"
    ></div>

    <h1 class="text-5xl md:text-7xl font-bold mb-6 text-gray-900 tracking-normal leading-tight">
      hi, i'm
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 pr-4 pb-2"
      >
        Rotana Pheakdey
      </span>
      .
    </h1>

    <p class="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
      i'm an aspiring full-stack developer based in cambodia. i am passionate about building clean,
      functional, and user-friendly web interfaces.
    </p>

    <div class="flex gap-4">
      <RouterLink
        to="/projects"
        class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
      >
        see my work
      </RouterLink>
      <RouterLink
        to="/contact"
        class="border border-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 text-gray-600 transition"
      >
        contact me
      </RouterLink>
    </div>
  </div>
</template>
