<script setup>
import { ref } from 'vue'

const email = ref('')
const msg = ref('')

const handleSend = () => {
  // simulation only
  alert(`message sent!\n\nfrom: ${email.value}`)
  email.value = ''
  msg.value = ''
}
</script>

<template>
  <div class="py-12 max-w-xl mx-auto">
    <h2 class="text-4xl font-bold mb-2 text-center text-gray-900">get in touch.</h2>
    <p class="text-center text-gray-500 mb-10">have a question or proposal?</p>

    <form @submit.prevent="handleSend" class="space-y-6">
      <div>
        <label class="block text-sm font-bold text-gray-700 mb-2">email</label>
        <input
          v-model="email"
          type="email"
          required
          class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="name@example.com"
        />
      </div>

      <div>
        <label class="block text-sm font-bold text-gray-700 mb-2">message</label>
        <textarea
          v-model="msg"
          rows="5"
          required
          class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="hello..."
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition"
      >
        send message
      </button>
    </form>
  </div>
</template>
