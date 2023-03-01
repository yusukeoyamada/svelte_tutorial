<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<h2>Counterコンポーネント</h2>
<button on:click={increment}>
  count is {count}
</button>
