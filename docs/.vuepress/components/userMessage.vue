<template>
         <div class="flex items-end justify-end">
            <div class="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end border-gray-200">
               <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none" style="white-space: pre-line;">{{ message }}</span></div>
            </div>
            <div class="w-6 h-6 rounded-full order-1">🙂</div>
         </div>
</template>

<script>

export default {
   name: 'botMessage',
   props: {
      message: {
         type: String,
         required: true
      }
   }
}
</script>