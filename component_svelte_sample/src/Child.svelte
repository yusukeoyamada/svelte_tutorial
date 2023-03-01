<script>
  import { createEventDispatcher } from 'svelte';

  let error = 'エラーが発生しています。';

  // 子コンポーネントの”Alert”ボタンをクリックしても、
  // 現在の状態では、親コンポーネント側では”Alert”ボタンがクリックされたことはわかりません。
    // 子コンポーネントで”Alert”ボタンが押されたことを親コンポーネントに伝えるため
    // createnDispatcherを利用
  const dispatch = createEventDispatcher();
  const clicked = () => {
    // createEventDispatcher関数から作成したdispatch関数を利用して、
    // Childから、alertButtonClickedイベントを発火(イベント名は、任意の名前をつけることができます)
      // イベントは、発火だけではなく、親コンポーネントであるAppコンポーネントで受け取る処理が必要に
    // dispatch('alertButtonClicked');

    // 以下は、イベントと一緒にデータを渡す方法
      // データは、dispatch関数の第二引数に設定することができる
    dispatch('alertButtonClicked', error);
  };
</script>

<h2>Childコンポーネント</h2>
<!-- <button>Alert</button> -->

<button on:click={clicked}>Alert</button>
