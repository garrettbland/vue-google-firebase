'use strict';

import firebase from 'firebase';
import firestore from './firestore/index.js'

export default {

    install(Vue, config){
        if(config){
            this.init(config, Vue);
        }else{
            console.error('Vue-Google-Firebase error. A config object is required when installing plugin.');
        }
    },

    init(config, Vue){

        // Initialize Firebase
        firebase.initializeApp(config)

        // Set global instance property
        Vue.prototype.$firestore = firestore

    }

}