<script>
  import Counter from './lib/Counter.svelte'
  import Counter2 from './lib/Counter2.svelte'
  import Counter3 from './lib/Counter3.svelte'
  import Counter4 from './lib/Counter4.svelte'

  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>
  <!-- Appから文字列を渡したい場合は以下 -->
  <Counter name="カウンター1" />
  <Counter2 name="カウンター2" />
  <Counter3 name="カウンター3" />
  <Counter4 name="カウンター4" />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
