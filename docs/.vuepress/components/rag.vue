
<template>
    <div>
        <ChatBot :domain="domain" />
    </div>

</template>

<script>

export default {
    data() {
        return {
            domain: {
                "domain": "public-precarise",
                "title": "maider.be",
                "intro": "Bonjour, vous pouvez intéragir avec moi en posant des questions sur les aides en RW.",
                "PERSIST":false
            }
        }
    },
    methods: {
     
    },
    mounted() {
    }


}

</script>



<style>



:before,
:after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / .5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: 
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / .5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: 
}
.container {
  width:100%
}
@media (min-width: 640px) {
  .container {
    max-width:640px
  }
}
@media (min-width: 768px) {
  .container {
    max-width:768px
  }
}
@media (min-width: 1024px) {
  .container {
    max-width:1024px
  }
}
@media (min-width: 1280px) {
  .container {
    max-width:1280px
  }
}
@media (min-width: 1536px) {
  .container {
    max-width:1536px
  }
}
.absolute {
  position:absolute
}
.relative {
  position:relative
}
.inset-y-0 {
  top:0px;
  bottom:0px
}
.right-0 {
  right:0px
}
.order-1 {
  order:1
}
.order-2 {
  order:2
}
.float-left {
  float:left
}
.mx-2 {
  margin-left:.5rem;
  margin-right:.5rem
}
.mx-auto {
  margin-left:auto;
  margin-right:auto
}
.mb-2 {
  margin-bottom:.5rem
}
.mb-3 {
  margin-bottom:.75rem
}
.ml-2 {
  margin-left:.5rem
}
.mr-3 {
  margin-right:.75rem
}
.mt-1 {
  margin-top:.25rem
}
.block {
  display:block
}
.inline-block {
  display:inline-block
}
.flex {
  display:flex
}
.inline-flex {
  display:inline-flex
}
.grid {
  display:grid
}
.hidden {
  display:none
}
.h-10 {
  height:2.5rem
}
.h-6 {
  height:1.5rem
}
.h-8 {
  height:2rem
}
.h-screen {
  height:100vh
}
.w-10 {
  width:2.5rem
}
.w-12 {
  width:3rem
}
.w-6 {
  width:1.5rem
}
.w-8 {
  width:2rem
}
.w-full {
  width:100%
}
.max-w-xs {
  max-width:20rem
}
.flex-1 {
  flex:1 1 0%
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
.transform {
  transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
.grid-cols-1 {
  grid-template-columns:repeat(1,minmax(0,1fr))
}
.flex-col {
  flex-direction:column
}
.flex-wrap {
  flex-wrap:wrap
}
.items-start {
  align-items:flex-start
}
.items-end {
  align-items:flex-end
}
.items-center {
  align-items:center
}
.justify-end {
  justify-content:flex-end
}
.justify-center {
  justify-content:center
}
.justify-between {
  justify-content:space-between
}
.gap-4 {
  gap:1rem
}
.space-x-2>:not([hidden])~:not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right:calc(.5rem * var(--tw-space-x-reverse));
  margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))
}
.space-x-4>:not([hidden])~:not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right:calc(1rem * var(--tw-space-x-reverse));
  margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))
}
.space-y-2>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom:calc(.5rem * var(--tw-space-y-reverse))
}
.space-y-4>:not([hidden])~:not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom:calc(1rem * var(--tw-space-y-reverse))
}
.overflow-hidden {
  overflow:hidden
}
.overflow-y-auto {
  overflow-y:auto
}
.rounded-full {
  border-radius:9999px
}
.rounded-lg {
  border-radius:.5rem
}
.rounded-md {
  border-radius:.375rem
}
.rounded-bl-none {
  border-bottom-left-radius:0
}
.rounded-br-none {
  border-bottom-right-radius:0
}
.border {
  border-width:1px
}
.border-b-2 {
  border-bottom-width:2px
}
.border-t-2 {
  border-top-width:2px
}
.border-none {
  border-style:none
}
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color:rgb(229 231 235 / var(--tw-border-opacity))
}
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color:rgb(59 130 246 / var(--tw-bg-opacity))
}
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color:rgb(243 244 246 / var(--tw-bg-opacity))
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color:rgb(229 231 235 / var(--tw-bg-opacity))
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color:rgb(156 163 175 / var(--tw-bg-opacity))
}
.bg-orange-50 {
  --tw-bg-opacity: 1;
  background-color:rgb(255 247 237 / var(--tw-bg-opacity))
}
.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color:rgb(254 226 226 / var(--tw-bg-opacity))
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color:rgb(255 255 255 / var(--tw-bg-opacity))
}
.p-3 {
  padding:.75rem
}
.p-6 {
  padding:1.5rem
}
.px-3 {
  padding-left:.75rem;
  padding-right:.75rem
}
.px-4 {
  padding-left:1rem;
  padding-right:1rem
}
.py-2 {
  padding-top:.5rem;
  padding-bottom:.5rem
}
.py-3 {
  padding-top:.75rem;
  padding-bottom:.75rem
}
.pl-12 {
  padding-left:3rem
}
.pt-4 {
  padding-top:1rem
}
.text-center {
  text-align:center
}
.text-2xl {
  font-size:1.5rem;
  line-height:2rem
}
.text-lg {
  font-size:1.125rem;
  line-height:1.75rem
}
.text-sm {
  font-size:.875rem;
  line-height:1.25rem
}
.font-bold {
  font-weight:700
}
.font-medium {
  font-weight:500
}
.font-normal {
  font-weight:400
}
.italic {
  font-style:italic
}
.leading-tight {
  line-height:1.25
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color:rgb(75 85 99 / var(--tw-text-opacity))
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color:rgb(55 65 81 / var(--tw-text-opacity))
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color:rgb(17 24 39 / var(--tw-text-opacity))
}
.text-white {
  --tw-text-opacity: 1;
  color:rgb(255 255 255 / var(--tw-text-opacity))
}
.placeholder-gray-600::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color:rgb(75 85 99 / var(--tw-placeholder-opacity))
}
.placeholder-gray-600::placeholder {
  --tw-placeholder-opacity: 1;
  color:rgb(75 85 99 / var(--tw-placeholder-opacity))
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)
}
.outline {
  outline-style:solid
}
.transition {
  transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;
  transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
  transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
  transition-timing-function:cubic-bezier(.4,0,.2,1);
  transition-duration:.15s
}
.duration-500 {
  transition-duration:.5s
}
.ease-in-out {
  transition-timing-function:cubic-bezier(.4,0,.2,1)
}
.hover\:bg-blue-400:hover {
  --tw-bg-opacity: 1;
  background-color:rgb(96 165 250 / var(--tw-bg-opacity))
}
.hover\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color:rgb(30 64 175 / var(--tw-bg-opacity))
}
.focus\:placeholder-gray-400:focus::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color:rgb(156 163 175 / var(--tw-placeholder-opacity))
}
.focus\:placeholder-gray-400:focus::placeholder {
  --tw-placeholder-opacity: 1;
  color:rgb(156 163 175 / var(--tw-placeholder-opacity))
}
.focus\:outline-none:focus {
  outline:2px solid transparent;
  outline-offset:2px
}
.focus\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)
}
.focus\:ring-transparent:focus {
  --tw-ring-color: transparent
}
@media (min-width: 640px) {
  .sm\:mb-0 {
    margin-bottom:0
  }
  .sm\:flex {
    display:flex
  }
  .sm\:h-16 {
    height:4rem
  }
  .sm\:w-16 {
    width:4rem
  }
  .sm\:items-center {
    align-items:center
  }
  .sm\:p-6 {
    padding:1.5rem
  }
}
@media (min-width: 768px) {
  .md\:grid-cols-3 {
    grid-template-columns:repeat(3,minmax(0,1fr))
  }
}
@media (min-width: 1024px) {
  .lg\:max-w-md {
    max-width:28rem
  }
  .lg\:grid-cols-3 {
    grid-template-columns:repeat(3,minmax(0,1fr))
  }
}
.scrollbar-w-2::-webkit-scrollbar {
  width:.25rem;
  height:.25rem
}
.scrollbar-track-blue-lighter::-webkit-scrollbar-track {
  --bg-opacity: 1;
  background-color:#f7fafc;
  background-color:rgba(247,250,252,var(--bg-opacity))
}
.scrollbar-thumb-blue::-webkit-scrollbar-thumb {
  --bg-opacity: 1;
  background-color:#edf2f7;
  background-color:rgba(237,242,247,var(--bg-opacity))
}
.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius:.25rem
}
.description[data-v-6b549862] {
  font-size:.8rem;
  font-style:italic
}
header[data-v-5c3a6638] {
  line-height:1.5
}
.logo[data-v-5c3a6638] {
  display:block;
  margin:0 auto 2rem
}
@media (min-width: 1024px) {
  header[data-v-5c3a6638] {
    display:flex;
    place-items:center;
    padding-right:calc(var(--section-gap) / 2)
  }
  .logo[data-v-5c3a6638] {
    margin:0 2rem 0 0
  }
  header .wrapper[data-v-5c3a6638] {
    display:flex;
    place-items:flex-start;
    flex-wrap:wrap
  }
}

</style>