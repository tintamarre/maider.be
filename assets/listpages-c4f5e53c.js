import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,b as r,t as s,a as i}from"./app-307a7816.js";const m={};function o(t,f){return a(),n("div",null,[r(s(t.$site.pages)+" ",1),i(` <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Recettes</th>
          <th>Tags</th>
          <th>Dernière mise à jour</th>
        </tr>
      </thead>
      <tr v-for="page in $site.pages.sort((a, b) => (a.frontmatter.status > b.frontmatter.status) ? -1 : +1)" v-if="page.title != 'Home'">
        <td>
          <Badge :text="page.frontmatter.status" type="warning" v-if="page.frontmatter.status == 'draft'" />
          <Badge :text="page.frontmatter.status" type="info" v-if="page.frontmatter.status == 'published'" />
        </td>
        <td>
          <a :href="page.relativePath.slice(0, -3)">{{ page.title }}</a>

          <div v-if="page.frontmatter.meta" v-for="meta in page.frontmatter.meta">

            <em>
              <small v-if="meta.name == 'description'">
                {{ meta.content }}
              </small>
            </em>
          </div>
        </td>
        <td>
          <div v-if="page.frontmatter.meta" v-for="meta in page.frontmatter.meta">

            <span v-if="meta.name == 'keywords'">
              <Badge :text="key" type="info" v-for="key in meta.content.split(',')" />
            </span>

          </div>
        </td>
        <td>
          <small>
            <em>{{ page.lastUpdated }}</em>
          </small>
        </td>

      </tr>
      
    </table> `)])}const l=e(m,[["render",o],["__file","listpages.vue"]]);export{l as default};
