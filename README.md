# Vue Google Firebase ![language](https://img.shields.io/badge/language-javascript-blue.svg)

> A simple firebase plugin for vue.js.

:fire: Vue plugin to easy implement firebase, firestore, authentication, and more into your vue application.

:construction: ***Still in development, new features are still being created.***

## :books: Table of Contents

- [Installation](#package-installation)
- [Usage](#rocket-usage)
- [Firestore API](#zap-firestore-api)
- [Firebase API](#zap-firebase-api)
- [Support](#hammer_and_wrench-support)
- [Contributing](#memo-contributing)
- [License](#scroll-license)

## :package: Installation

1. Install
```sh
npm install firebase vue-google-firebase
```
or
```sh
yarn add firebase vue-google-firebase
```

2. Import and install plugin. (example, in *main.js*)
```javascript
import VueGoogleFirebase from 'vue-google-firebase'

let config = {
  apiKey: XXXXXXXXX,
  authDomain: XXXXXXXXX,
  databaseURL: XXXXXXXXX,
  projectId: XXXXXXXXX,
  storageBucket: XXXXXXXXX,
  messagingSenderId: XXXXXXXXX,
  appId: XXXXXXXXX
}

Vue.use(VueGoogleFirebase,config)
```

## :rocket: Usage
Vue Google Firebase exposes a global instance property of both `$firestore` or `$firebase` to use anywhere in your app. Simple example below
```html
<template>
  <div>
    <ul v-for="item in items">
      <li>{{ item.data.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'example',
  data(){
    return {
      items:[]
    }
  },
  methods:{
    getData(){
      var state = this
      
      // Retrieves notes collection
      this.$firestore.list('notes').then(function(items){
        state.items = items
      })
    }
  },
  mounted(){
    this.getData()
  }
}
</script>
```

## :zap: Firestore API

Syntax format - **this.$firestore.method(collection,[query | document])**

| Title | Type | Required | Default |
|--|--|--|--|
| collection | String | `true` | `null` |
| query | Object | `false` | `{}` |
| document | String | `true` | `null` |

Note: The query object accepts parameters set by firestore. [Please refer here](https://firebase.google.com/docs/firestore/quickstart) for the official firestore documentation

### **Methods**

 - Retrieve items from collection. Returns a promise.
```javascript
this.$firestore.list(collection,query)
```
Example. Retrieve `notes` collection, specify a where and limit items. 
```javascript
this.$firestore.list('notes',{
  where:[ "user" ,"==", "garrett" ],
  limit:5
})
```
 - Get single document from collection. Returns a promise.
```javascript
this.$firestore.get(collection,document)
```
Example. Retrieves single document from `notes` collection
```javascript
this.$firestore.get('notes','DOCUMENT-ID-XXX')
```

## :zap: Firebase API

:construction: Still in development, firebase documentation and functionality coming soon

## :hammer_and_wrench: Support

Please [open an issue](https://github.com/garrettbland/vue-google-firebase/issues/new) for support.

## :memo: Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/garrettbland/vue-google-firebase/compare/).

## :scroll: License

[MIT](LICENSE) © [Garrett Bland](https://github.com/garrettbland)
