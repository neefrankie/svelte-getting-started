// import App from './App.svelte';

// const app = new App({
// 	target: document.body,
// 	props: {
// 		name: 'world'
// 	}
// });

import Login from './pages/Login.svelte';

const app = new Login({
  target: document.body
});

export default app;
