<template>
    <div id="app">
        <Header></Header>
        <h1>Hello Vue SSR</h1>
    </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
    components: {
        Header,
    },
    beforeCreate() {
        console.log('---beforecreate---');
    },
    created() {
        console.log('---created---');
    },
    beforeMount() {
        console.log('---beforeMount---');
    },
    mounted() {
        console.log('---mounted---');
    }
};
</script>


