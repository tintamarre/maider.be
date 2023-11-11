

<template>

          <div v-for="demarche in data.items" :key="demarche.procedureId">
            <p>ProcédureId: {{ demarche.procedureId }}</p>
            <div v-for="trans in demarche.translations" key="trans.lang">   
                
                <p v-if="trans.nostraId">
                    nostraId: <a :href="'https://www.wallonie.be/fr/demarches/' + trans.nostraId">{{ trans.nostraId }}</a>
                </p>
                <h1>{{ trans.fullTitle }}</h1>
                <p v-html="trans.description"></p>
                <ul>
                    <li v-for="link in trans.links"><a :href="link.url">{{ link.title }}</a></li>
                </ul>

                <h2 v-if="trans.taxonomies">Taxonomie</h2>
                <ul>                
                    <li v-for="taxonomy in trans.taxonomies">
                    <span class="bold">{{ taxonomy.label }} <a @click="changeUrl(taxonomy.taxonomyTypeId, 'taxonomyType')"><sup>link</sup></a></span>:                   
                        <span v-for="item in taxonomy.items">
                            <a @click="changeUrl(item.taxonomyId, 'taxonomy')">{{ item.label }} </a>;
                        </span>
                    </li>
                </ul>

                <textarea>{{ trans }}</textarea>
            </div>
            
            {{ items }}
        </div>  
    

</template>

<script>

export default {
    data() {
        return {
            posts: {},
            data: {},
            new_url: ''
        }
    },
    // call api
    methods: {
        async getIodda(path) {
            const url = 'https://iodda.datawb.be/tunnel/' + path
            const res = await fetch(url, {
                method: 'GET'
            })
            this.data = await res.json()
        },
        changeUrl(id, type) {
            switch (type) {
                case 'taxonomyType':
                    this.new_url = 'taxonomies?lang=FR&lang=DE&extendedMode=true&taxonomyTypeId=' + id
                    break;
                case 'taxonomy':
                    this.new_url = 'procedures?lang=FR&lang=DE&extendedMode=true&taxonomyId=' + id
                    break;
                case 'administration':
                    this.new_url = 'administrationsDetails?administrationId=' + id + '&lang=FR&extendedMode=true'
                    break;
                default:
                    this.new_url = 'proceduresDetails?procedureId=' + id + '&lang=FR&extendedMode=true'
                    break;
            }
            this.getIodda(this.new_url)
        }
    },
    mounted() {
        // this.getPosts()
        this.getIodda('proceduresDetails?procedureId=1044&lang=FR&extendedMode=true')
    }


}

</script>