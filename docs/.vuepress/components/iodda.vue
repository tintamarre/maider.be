

<template>

    <div>
        <span v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </span>
    </div>
        <div v-for="demarche in data.items" :key="demarche.procedureId">
            <h3>{{ demarche.procedureId }}</h3>
            <div v-for="trans in demarche.translations" key="trans.lang">   
                
                <p>NostraID {{ trans.nostraId }}</p>
                <h2>{{ trans.fullTitle }}</h2>
                <p v-html="trans.description"></p>
                <ul>
                    <li v-for="link in trans.links"><a :href="link.url">{{ link.title }}</a></li>
                </ul>

                <h3>Taxonomie</h3>
                <p v-for="taxonomy in trans.taxonomies">
                    <h4>{{ taxonomy.label }} <sup>{{ taxonomy.taxonomyTypeId }}</sup></h4>
                    <ul>
                        <li v-for="item in taxonomy.items">
                            <a href="item.taxonomyId">{{ item.label }} <sup>{{ item.taxonomyId }}</sup></a>
                        </li>
                    </ul>
                </p>
                <textarea>{{ trans }}</textarea>
            </div>
            
            
        </div>  
    
    {{ items }}
</template>

<script>

export default {
    data() {
        return {
            posts: {},
            data: {}
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
        }
    },
    mounted() {
        // this.getPosts()
        this.getIodda('proceduresDetails?procedureId=1044&lang=FR&extendedMode=true')
    }


}

</script>