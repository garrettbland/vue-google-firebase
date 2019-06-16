'use strict';

import firebase from 'firebase';
import 'firebase/firestore';

export default {

	defaults:{
        limit:10
    },

	buildQuery(collection,query){

		// Initial variables
		var collection = collection;
		var query = query || {};

        // Initialize firestore
        var db = firebase.firestore();

        // Set collection
        db = db.collection(collection);

        // Loop through query object, build query
        for(const prop in query){
        	if(Array.isArray(query[prop])){
        		db = db[prop](...query[prop]);
        	}else{
        		db = db[prop](query[prop]);
        	}
        }

        // Check if limit in defined. If not, set limit to default
        if(!query.limit){
        	return db['limit'](this.defaults.limit);
        }else{
        	return db;
        }
     

    },

    async list(collection,query){

        // Build query
        var docRef = this.buildQuery(collection,query);

        // Create empty array, get documents, push to items array
        var items = [];
        docRef.get().then(function(snapshot){
            snapshot.forEach(function(document){
                items.push({
                    id:document.id,
                    data:document.data()
                })
            });
        }).catch(function(error){
            console.error('Vue-Google-Firebase error. ' + error);
        });

        // Return items array
        return await items;

    }

}