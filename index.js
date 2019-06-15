'use strict';

import firebase from 'firebase'
export default {


    install(Vue, config){
        //Vue.component('vue-google-firebase', Ad);
        this.init(config, Vue);
    },

    init(config, Vue){

        console.log('initing...')
        console.log('config settings...')
        console.log(config)


        Vue.prototype.$firebase = config;

}