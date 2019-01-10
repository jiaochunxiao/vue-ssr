<template>
    <div id="home-container">
        <h1>HOME</h1>
        <h2>{{count}}</h2>
        <button @click='addCount'>点击增加</button>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    asyncData({ store }) {
        return store.dispatch('increment');
    },
    computed: mapState(['count']),
    methods: {
        addCount() {
            console.log(this.$store);
            this.$store.dispatch('increment');
        }
    },
};

</script>


