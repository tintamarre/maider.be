import a from"./maiderWaiting-771c7772.js";import r from"./maiderIcon-48b59018.js";import{_ as o,o as t,c as i,a as s,n as l,h as n,f as c,b as d,t as m,d as f}from"./app-197e64df.js";const u={class:"flex items-end"},g={class:"flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start"},p={name:"botMessage",props:{message:{type:String,required:!0},hasError:{type:Boolean,required:!1},isWaiting:{type:Boolean,required:!1}}},x=Object.assign(p,{setup(e){return(b,_)=>(t(),i("div",u,[s("div",g,[s("div",null,[s("span",{class:l(["px-4 py-2 rounded-lg inline-block rounded-bl-none bg-pink text-white",{"bg-red-100":e.hasError,"bg-blue-500":e.isWaiting}]),style:{"white-space":"pre-line"}},[e.isWaiting?(t(),n(a,{key:0,class:"w-12 h-8 rounded-full order-1 float-left"})):c("v-if",!0),d(" "+m(e.message),1)],2)])]),f(r,{class:"w-12 h-8 rounded-full order-1"})]))}}),B=o(x,[["__file","botMessage.vue"]]);export{B as default};
