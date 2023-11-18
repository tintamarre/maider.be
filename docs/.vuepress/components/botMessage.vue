<script setup>
import maiderWaitingIcon from './icons/maiderWaiting.vue';
import maiderIcon from './icons/maiderIcon.vue';
</script>

<template>
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-sm max-w-sm mx-2 order-2 items-start text-white">
               <div>
                  <div class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-pink-600 bg-gradient-to-r from-pink-700" style="white-space: pre-line;" 
                  :class="{ 
                  'bg-white from-white text-gray-600 border-2 border-gray-300': isWaiting,
                  'bg-white from-white border-2 border-red-700 text-gray-900': hasError}">
                  <maiderWaitingIcon class="w-8 h-8 rounded-full order-1 float-left" v-if="isWaiting" />
                  <span v-html="message"></span>
                                   
               </div>
            </div>
            
            </div>
            
            <maiderIcon class="w-10 h-10 rounded-lg order-1" v-if="!isWaiting"/>
         </div>

</template>

<script>

export default {
   name: 'botMessage',
   props: {
      message: {
         type: String,
         required: true
      },
      hasError: {
         type: Boolean,
         required: false
      },
      isWaiting: {
         type: Boolean,
         required: false
      }
   }
}
</script>