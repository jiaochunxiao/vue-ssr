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
        console.log('action asyncData');
        return store.dispatch('setInitCount');
    },
    // 如果通过mapState方式，取值，始终是拿到的count为0，并不是 asyncData执行后的值
    // 有点诡异
    // computed: mapState(['count']),
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
    methods: {
        addCount() {
            console.log(this.$store);
            this.$store.dispatch('increment');
        }
    },
};

</script>


