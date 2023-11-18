<script setup>
import maiderWaitingIcon from './icons/maiderWaiting.vue';
import maiderIcon from './icons/maiderIcon.vue';
</script>

<template>
         <div class="flex items-end">
            <div class="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
               <div>
                  <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-pink text-white" style="white-space: pre-line;" :class="{ 'bg-red-100': hasError, 'bg-blue-500': isWaiting }">
                  <maiderWaitingIcon class="w-12 h-8 rounded-full order-1 float-left" v-if="isWaiting" />
                     {{ message }}
                  </span>
            </div>
            </div>
            <maiderIcon class="w-12 h-8 rounded-full order-1" />
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