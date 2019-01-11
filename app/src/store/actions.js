import { resolve } from "url";

'use strict';

export default {
    increment({commit}) {
        return new Promise((resolve, reject) => {
            commit('INCREMENT');
            resolve();
        })
    },
    setInitCount({commit}) {
        return new Promise((resolve, reject) => {
            commit('SETCOUNT');
            resolve();
        })
    }
}
