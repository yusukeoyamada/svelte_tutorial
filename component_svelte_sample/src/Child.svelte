<script>
  // 子コンポーネントで”Alert”ボタンが押されたことを親コンポーネントに伝えるため
  import { createEventDispatcher } from 'svelte';

  let error = 'エラーが発生しています。';

  const dispatch = createEventDispatcher();
  const clicked = () => {
    // Childからdispatch関数を利用して発火
    // イベントと一緒にデータを渡す
    dispatch('alertButtonClicked', error);
  };
</script>

<h2>Childコンポーネント</h2>
<button on:click={clicked}>Alert</button>
