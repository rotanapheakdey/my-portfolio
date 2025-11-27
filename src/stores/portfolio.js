import { defineStore } from 'pinia'
import axios from 'axios'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    projects: [],
    loading: false,
  }),
  actions: {
    async fetchProjects() {
      // checking if data is already loaded to save bandwidth
      if (this.projects.length > 0) return

      this.loading = true
      try {
        // your specific sheet id
        const sheetId = '1gDDwoK6_7JpULfF09HHNaKt9fcYhNrxEkD3PhbSiT_M'
        const url = `https://opensheet.elk.sh/${sheetId}/Sheet1`

        const response = await axios.get(url)
        this.projects = response.data
      } catch (err) {
        console.log('error loading sheet', err)
      } finally {
        this.loading = false
      }
    },
  },
})
