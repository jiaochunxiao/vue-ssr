'use strict';
import * as types from './types';
// import Vue from 'vue';
export default {
    [types.INCREMENT](state) {
        state.count = state.count + 1;
        // Vue.set(state.count, 10);
    },
    [types.SETCOUNT](state) {
        state.count = 10;
    }
}
