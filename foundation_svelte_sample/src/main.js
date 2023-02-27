import './app.css'
import App from './App.svelte'

const app = new App({
  // targetで、どのDOMに対してSvelteインスタンスをマウントするのかを指定
  target: document.getElementById('app'),
  props: {
    name: 'world',
  },
})

export default app
