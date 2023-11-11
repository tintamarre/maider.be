<script setup>
import Chatbot from './ChatBotComponent.vue'

</script>
<template>
    <div>
      <Chatbot :domain="domain" v-if="domain_selected"/>

      <div v-else class="container mx-auto">
        <h1 class="mb-2 text-2xl font-bold text-gray-900">Expérimentation</h1>
    
        <p>Choisissez un domaine pour discuter avec un agent conversationnel</p>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md lg:max-w-md" v-for="domain in domains" :key="domain.id">
            <h2 class="mb-2 text-2xl text-gray-900">{{ domain.title }}</h2>
            <p class="mb-3 font-normal text-gray-700">{{ domain.description }}</p>
                <a @click="selectDomain(domain)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:outline-none">Accéder à l'agent</a>  
         </div>
         

      </div>
      <p class="text-sm p-10 text-gray-500">
      ⚠️ Ce projet est une expérimentation réalisée par la Fédération Wallonie-Bruxelles. Il n'est pas destiné à être utilisé en production. Pour plus d'informations, contactez <a href="mailto:martin.erpicum@cfwb.be" class="hover:bg-green-600 hover:text-white text-green-600">Martin Erpicum</a>.
      </p>
 
    </div>
   

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        domains: {},
        domain_selected: false,
        domain: '',
      };
    },
    mounted() {
      this.fetchDomains();
    },
    methods: {
        selectDomain(domain) {
            this.domain_selected = true;
            this.domain = domain;
        },
      async fetchDomains() {
        try {
          const response = await fetch('https://api.datawb.be/domains/index');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.domains = data;
        } catch (error) {
          console.error('Error fetching domains:', error);
        }
      },
    },
  };
  </script>
  
<style scoped>
.description {
    font-size: 0.8rem;
    font-style: italic;
}
</style>