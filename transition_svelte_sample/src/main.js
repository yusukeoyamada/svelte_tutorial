import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    name: 'world',
  },
  // 最初のレンダリングでもtransitionを適用させたい場合、以下を設定
    // introプロパティの値は、デフォルトではfalseに設定
  intro: true,
})

export default app
