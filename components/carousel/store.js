import { defineStore } from 'pinia';
import axios from 'axios';

export const useBannerStore = defineStore('banner', {
  state: () => ({
    banners: [],
  }),

  actions: {
    async fetchBanners() {
      this.error = null;

      try {
        const response = await axios.get('/api/open/banner/all?position=home-banner', {
          headers: {
            'api-key': import.meta.env.VITE_API_KEY,
          },
        });

        this.banners = response.data.data || [];
        
      } catch (err) {
        console.log('err:', err.message)
      }
    },
  },
});
