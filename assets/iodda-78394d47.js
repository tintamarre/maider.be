import{_ as f}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as l,f as e,F as r,g as a,b as i,t as n}from"./app-307a7816.js";const m={data(){return{posts:{},data:{}}},methods:{async getIodda(d){const c="https://iodda.datawb.be/tunnel/"+d,p=await fetch(c,{method:"GET"});this.data=await p.json()}},mounted(){this.getIodda("proceduresDetails?procedureId=1044&lang=FR&extendedMode=true")}},I={key:"trans.lang"},x=["innerHTML"],y=["href"],g=e("h3",null,"Taxonomie",-1),T={href:"item.taxonomyId"};function b(d,c,p,k,_,v){return t(),l(r,null,[e("div",null,[(t(!0),l(r,null,a(_.posts,o=>(t(),l("span",{key:o.id},[e("h3",null,n(o.title),1),e("p",null,n(o.body),1)]))),128))]),(t(!0),l(r,null,a(_.data.items,o=>(t(),l("div",{key:o.procedureId},[e("h3",null,n(o.procedureId),1),(t(!0),l(r,null,a(o.translations,u=>(t(),l("div",I,[e("p",null,"NostraID "+n(u.nostraId),1),e("h2",null,n(u.fullTitle),1),e("p",{innerHTML:u.description},null,8,x),e("ul",null,[(t(!0),l(r,null,a(u.links,s=>(t(),l("li",null,[e("a",{href:s.url},n(s.title),9,y)]))),256))]),g,(t(!0),l(r,null,a(u.taxonomies,s=>(t(),l("p",null,[e("h4",null,[i(n(s.label)+" ",1),e("sup",null,n(s.taxonomyTypeId),1)]),e("ul",null,[(t(!0),l(r,null,a(s.items,h=>(t(),l("li",null,[e("a",T,[i(n(h.label)+" ",1),e("sup",null,n(h.taxonomyId),1)])]))),256))])]))),256)),e("textarea",null,n(u),1)]))),128))]))),128)),i(" "+n(d.items),1)],64)}const D=f(m,[["render",b],["__file","iodda.vue"]]);export{D as default};