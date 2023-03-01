<script>
  import { fly } from 'svelte/transition';

  let count = 0
  const increment = () => {
    count += 1
  }

  export let name;
</script>

<h2>{name}コンポーネント</h2>

<p>
  カウント:
  <!-- アニメーションは、表示・非表示の切り替え時のみだけではなく、値が更新される場合にも適用できる
    keyブロックを設定することで、countの値が更新されると、keyブロックの間にある要素が再作成されるようになります。
      そこに、transitionを利用してアニメーションを設定します。 -->
    <!-- (注意) 一部のインライン要素（aやspanなど）には、transitionが効かない -->
  {#key count}
    <span style="display:inline-block" in:fly={{ y: -20 }}>{count}</span>
  {/key}
</p>

<button on:click={increment}>
  count is {count}
</button>
