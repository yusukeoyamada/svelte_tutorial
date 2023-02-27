<!-- 以下、derived利用例 -->

<script>
  import { writable, derived } from 'svelte/store';

  const count = writable(0);
  const count2 = writable(5);

  // derivedは、単独では利用することができず、必ずwritableかreadableで作成した値が必要
    // 以下のように、「$count」とすることで、更新を検知できる
      // const doubledCount = derived(count, $count => $count * 2);
  // callback関数には、第一引数のwritableの値だけではなく、set関数も利用することができる
    // const doubledCount = derived(count, ($count, set) =>
    //   setTimeout(() => {
    //     set($count * 2);
    //   }, 1000)
    // );
  // 第一引数に設定できる値は、1つだけではなく、複数のwritableかreadableの値を指定することができる
    // 複数指定する場合は、配列で指定する必要がある
  const doubledCount = derived([count, count2], ([$count, $count2], set) =>
    setTimeout(() => {
      set($count * $count2);
    }, 1000)
  );

  const increment = () => {
    count.update(value => {
      return ++value;
    });
  }

  const increment2 = () => {
    count2.update((value) => {
      return ++value;
    });
  };

  export let name = 'Counter';
</script>

<h2>{name}コンポーネント</h2>
<div>
  <p>カウント:{$count}</p>
  <p>カウント2:{$count2}</p>
  <!-- readableと同様に、derivedはsubscribeのみしか持っていないので、 -->
  <!-- subscribeするか、$を利用してブラウザ上に表示させることができます。 -->
  <p>ダブルカウント:{$doubledCount}</p>
</div>
<div>
  <button on:click={increment}>Count Up</button>
  <button on:click={increment2}>Count2 Up</button>
</div>
