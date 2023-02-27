<!-- 以下、if文利用例 -->

<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };

  export let name = 'Counter';
</script>

<h2>{name}コンポーネント</h2>
<div>
  <p>カウント:{count}</p>
</div>
{#if count < 5}
  <div>
    <button on:click={increment}>Up</button>
  </div>
{:else}
  <p>これ以上数は増やせません。</p>
{/if}

<!-- 以下のように、「if else」も利用できる -->
  <!-- {#if porridge.temperature > 100}
    <p>too hot!</p>
  {:else if 80 > porridge.temperature}
    <p>too cold!</p>
  {:else}
    <p>just right!</p>
  {/if} -->
