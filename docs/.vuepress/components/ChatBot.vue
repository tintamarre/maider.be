<script setup>
import maiderWaitingIcon from './icons/maiderWaiting.vue';
import maiderIcon from './icons/maiderIcon.vue';
import botMessage from './botMessage.vue';
import userMessage from './userMessage.vue';
</script>

<template>    
<div class="h-screen overflow-hidden flex items-center justify-center" 
style="background: #edf2f7;">

    <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
   <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
      <div class="relative flex items-center space-x-4">
         <div class="relative">

        <maiderIcon class="w-10 sm:w-16 h-10 sm:h-16 rounded-full" />
         </div>
         <div class="flex flex-col leading-tight">
            <div class="text-2xl mt-1 flex items-center">
               <span class="text-gray-700 mr-3">{{ domain.title }}</span>
            </div>
            <span class="text-lg text-gray-600">{{ domain.description }}</span>
            <span class="text-sm text-gray-400">Je suis maider, l’assistant virtuel du SPW et je peux vous informer sur les aides disponibles en Région wallonne. Mes réponses ne sont pas encore exhaustives et ne peuvent pas se substituer à la documentation officielle.
</span>
        
         </div>
         <button class="mr-1 mb-1 text-white font-bold py-1 px-1 rounded" alt="Télécharger ma conversation">
              💾
            </button>
      </div>
      <div class="flex items-center space-x-2">
         
      </div>
   </div>
   <div ref="messageDisplay" id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
    
    <div class="chat-message">
      <botMessage :message="domain.intro"/>
    </div>

    <div v-for="(message, index) in messages" :key="message.id" class="chat-message">
      <botMessage v-if="!message.isUser" :message="message.content"/>
      <userMessage v-if="message.isUser" :message="message.content"/>
    </div>

    <div class="chat-message">
      <botMessage message="Merci de patienter quelques secondes." isWaiting="true" v-if="waiting" />
    </div>  

    <div class="chat-message">
      <botMessage message="Oups. Il semble y avoir une erreur. 😟" hasError="true" v-if="error" />
    </div>  

   </div>
   <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">

      <form @submit.prevent="sendMessage" class="relative flex">

         <input type="text" placeholder="Posez votre question ici!" v-model="inputMessage" class="w-full focus:outline-none border-none focus:ring-0 focus:ring-transparent focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-100 rounded-md py-3">

         <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
                 
            <button type="submit" v-if="inputMessage" class="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-pink-700 hover:bg-gray-400 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-1 mr-2 transform">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
               </svg>
               
               <span class="font-bold">Envoyer</span>

            </button>

         </div>
        </form>

     </div>
  </div>
</div>
</template>

<style>
#messages{
  display: flex;
  /* flex-direction: column-reverse; */
  overflow-y: scroll;
}

.scrollbar-w-2::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}

.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color: #f7fafc;
  background-color: rgba(247, 250, 252, var(--bg-opacity));
}

.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color: #edf2f7;
  background-color: rgba(237, 242, 247, var(--bg-opacity));
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}
</style>

<script>
export default {
  components: { userMessage },
    props: {
      domain: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        messages: [
         
      ],
        inputMessage: '',
        waiting: false,
        error: false,
        session_token: null,
        session_created_at: null,
      };
    },
    // au chargement lancer session
    mounted() {
      if (sessionStorage.getItem('session_token') === null) {
        sessionStorage.setItem('session_token', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
        sessionStorage.setItem('created_at', new Date().toISOString().split('.')[0]+"Z");
      }
      this.session_token = sessionStorage.getItem('session_token');
      this.session_created_at = sessionStorage.getItem('created_at');
    },
    methods: {
      sendMessage() {
        const message = {
          content: this.inputMessage,
          isUser: true,
        };
        this.messages.push(message);
        this.inputMessage = '';
        this.waiting = true;
        // Envoyer la requête à l'API
        fetch('https://api.datawb.be/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            session_token: this.session_token,
            domain: this.domain.domain,
            query: message.content
          })
        })
          .then(response => response.json())
          .then(data => {
            // replace add href to links
            data.answer = data.answer.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" class="underline">🔗 $1</a>');

            const reply = {
              content: data.answer,
              isUser: false,
            };
            this.messages.push(reply);
            this.waiting = false;
            // scroll to bottom

          })
          .catch(error => {
            this.waiting = false;
            this.error = true;
            console.error('Erreur lors de la requête:', error);
          });  
      
             
      }
    }
  };

</script>