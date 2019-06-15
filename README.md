# vue-google-firebase ![language](https://img.shields.io/badge/language-javascript-blue.svg)

> A simple firebase plugin for vue.js.

:fire: Vue plugin to easy implement firebase, firestore, authentication, and more into your vue application.

:warning: ***Still very much in development, not recommended for production.***

## :books: Table of Contents

- [Installation](#package-installation)
- [Usage](#rocket-usage)
- [Support](#hammer_and_wrench-support)
- [Contributing](#memo-contributing)
- [License](#scroll-license)

## :package: Installation

1. Install
```sh
npm install vue-google-firebase
```
or
```sh
yarn add vue-google-firebase
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
Vue Google Firebase exposes a global instance property of `$firebase` to use anywhere in your app. Example below 
```html
<template>
	<div>
		<pre>
			{{$firebase}}
		</pre>
	</div>
</template>
```

## :hammer_and_wrench: Support

Please [open an issue](https://github.com/garrettbland/vue-google-firebase/issues/new) for support.

## :memo: Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/garrettbland/vue-google-firebase/compare/).

## :scroll: License

[MIT](LICENSE) © [Garrett Bland](https://github.com/garrettbland)
