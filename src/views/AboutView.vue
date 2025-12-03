<script setup>
</script>

<template>
  <div class="py-12">
    <h2 class="text-4xl font-bold mb-10 text-gray-900">about me.</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div class="md:col-span-2 bg-gray-50 p-8 rounded-3xl border border-gray-100">
        <h3 class="text-xl font-bold mb-4 text-gray-900">who i am.</h3>
        <p class="text-gray-600 leading-relaxed text-lg mb-6">
          i started with a curiosity for how the web works, and now i build full-stack applications.
          i focus on the <span class="text-indigo-600 font-bold">logic</span> behind the backend and the <span class="text-indigo-600 font-bold">fluidity</span> of the frontend.
        </p>
        <p class="text-gray-600 leading-relaxed text-lg">
          currently, i am mastering the modern javascript ecosystem to bridge the gap between complex data and clean user interfaces.
        </p>
      </div>

      <div class="bg-indigo-600 p-8 rounded-3xl text-white flex flex-col justify-between shadow-lg shadow-indigo-200">
        <div>
          <div class="text-indigo-200 font-mono text-sm mb-1">current status</div>
          <div class="text-3xl font-bold">open to work</div>
        </div>
        <div class="mt-8 flex items-center gap-2">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span class="text-sm font-medium">available for hire</span>
        </div>
      </div>

      <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
        <h3 class="text-xl font-bold mb-6 text-gray-900">my stack.</h3>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">javascript (es6+)</span>
          <span class="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">vue.js 3</span>
          <span class="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">pinia</span>
          <span class="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">tailwind css</span>
          <span class="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">git & github</span>
          <span class="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">rest api</span>
        </div>
      </div>

      <div class="md:col-span-2 bg-gray-900 p-8 rounded-3xl text-gray-400 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div class="flex-1">
          <div class="text-xs font-mono uppercase tracking-widest mb-2 text-indigo-400">offline</div>
          <h3 class="text-xl font-bold text-white mb-2">based in phnom penh.</h3>
          <p class="leading-relaxed">
            when i'm not coding, i'm focused on discipline at the gym or grinding pvp in where winds meet.
          </p>
        </div>
        <div class="bg-gray-800 p-4 rounded-xl font-mono text-xs text-gray-300 w-full md:w-auto min-w-[200px]">
          <div>> location: cambodia</div>
          <div>> hobby: gym</div>
          <div>> game: where winds meet</div>
          <div class="text-indigo-400">> status: grinding...<span class="animate-pulse">_</span></div>
        </div>
      </div>

    </div>
  </div>
</template>
