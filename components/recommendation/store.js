import { defineStore } from 'pinia';
import axios from 'axios';

export const useUnivStore = defineStore('univ', {
  state: () => ({
    univs: [],
    univDetails: [],
  }),

  actions: {
    async fetchUnivAll() {
      try {
        const response = await axios.get('/api/open/college/all?perPage=8&page=1', {
          headers: {
            'api-key': import.meta.env.VITE_API_KEY,
          },
        });

        this.univs = response.data.data || [];

        if (this.univs.length > 0) {
          await this.fetchUnivDetails();
        }
        
      } catch (err) {
        console.log('err:', err.message)
      }
    },
    async fetchUnivDetails() {
      this.univDetails = []; 

      try {
        const requests = this.univs.map((univ) => 
          axios.get(`/api/open/college/${univ.id}`, {
            headers: { 'api-key': import.meta.env.VITE_API_KEY }
          })
        );

        const responses = await Promise.all(requests);
        this.univDetails = responses.map(res => res.data[0] || {});
        
      } catch (err) {
        console.log('err:', err.message)
      }
    },
  },
});
