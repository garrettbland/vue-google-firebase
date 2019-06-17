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

    	// Verify required parameters
    	if(!collection){
    		console.error('Vue-Google-Firebase error on method "list". Collection is missing from argument.');
    		return false;
    	}

        // Build query
        var docRef = this.buildQuery(collection,query);

        // Create empty array, get documents, push to items array
        var items = await [];
        let response = await docRef.get().then(function(snapshot){
            snapshot.forEach(function(document){
                items.push({
                    id:document.id,
                    data:document.data()
                })
            });
        }).catch(function(error){
            console.error('Vue-Google-Firebase error on method "list". ' + error);
        });

        // Return items array
        return items;

    },

    async get(collection,document){

    	// Verify required parameters
    	if(!collection || !document){
    		console.error('Vue-Google-Firebase error on method "get". Collection or Document are missing from argument.');
    		return false;
    	}

    	// Initialize firestore
        var db = firebase.firestore();

    	// Build query
    	var docRef = db.collection(collection).doc(document);

    	// Get single document
    	var item = await docRef.get().then(function(document){

    		// Check to see if document exists
    		if(document.exists){
    			return {
    				id:document.id,
    				data:document.data()
    			};
    		}else{
    			return {
    				message:'Document Not Found'
    			};
    		}
    	}).catch(function(error){
    		console.error('Vue-Google-Firebase error on method "get". ' + error);
    	});

    	// Return item object
    	return item;

    },

    async add(collection,document){

    	// Initialize firestore
        var db = firebase.firestore();

        // Create empty response item object
        var item = await {};

        // Run add firestore method
        let response = await db.collection(collection).add(document).then(function(docRef){
        	item = {
        		message:'Document created successfully',
        		documentId:docRef.id,
        	}
        }).catch(function(error){
        	console.error('Vue-Google-Firebase error on method "add". ' + error);
        });

        // Return newly created document
        return item;

    }

}