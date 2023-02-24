<script>
  import { beforeUpdate, onMount, onDestroy, afterUpdate } from 'svelte';

  beforeUpdate(() => {
    // 2番目に実行
    console.log('beforeUpdate execute');
  });
  onMount(() => {
    // 3番目に実行
    console.log('onMount execute');
  });
  afterUpdate(() => {
    // 4番目に実行
    console.log('afterUpdate execute');
  });
  onDestroy(() => {
    // 最後にToggleボタンをクリックしてコンポーネントをアンマウント
    // アンマウントする際にonDestroyのみが実行されている
    console.log('onDestroy execute');
  });

  // 1番目に実行
  console.log('script execute');
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<h2>Counterコンポーネント</h2>
<div>
  <p>カウント:{count}</p>
</div>
<div>
  <!-- “Up”ボタンをクリックしてカウント数をアップすると、コンポーネントの更新が行われるので、beforeUpdateとafterUpdateが実行されます。
  scriptタグのトップレベルのconsole.logが実行されることはありません。 -->
  <button on:click={increment}>Up</button>
</div>
