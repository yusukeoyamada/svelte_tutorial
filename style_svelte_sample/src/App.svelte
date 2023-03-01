<script>
  import Counter from './lib/Counter.svelte';

  export let name;

  // let emphasis = 'active';
  // let emphasis = true;
  let emphasis = 'emphasis';
</script>

<main>
  <h1>Hello {name}!</h1>

  <!-- もしclassを、{emphasis}ではなく、"emphasis"で設定した場合には、
  emphasisクラスが適用されます(emphasisクラスが定義されている場合) -->
  <!-- <h2 class={emphasis}>Styling</h2> -->

  <!-- 条件によるclassの設定は、下記の方法でも行うことができます。
  emphasisがtrueの場合のみ、activeクラスが適用されます。 -->
  <!-- <h2 class:active={emphasis}>Styling</h2> -->

  <!-- 条件によるclassの設定は、下記の方法でも行うことができます。
  {}(カーリーブレース)の中には、boolean値を持つ変数だけではなく、条件文を設定することもできます。 -->
  <h2 class:active={emphasis === 'emphasis'}>Styling</h2>

  <!-- 変数emphasisの値がtrueかfalseかによって適用されるクラスが動的に変わります。 -->
  <!-- <h2 class={emphasis ? 'active' : ''}>Styling</h2> -->

  <!-- 複数のclassを適用したい場合 -->
  <!-- <h2 class={emphasis ? 'active underline' : ''}>Styling</h2> -->

  <!-- underlineクラスは、emphasisの値によらず適用したい場合 -->
  <!-- <h2 class="underline{emphasis ? ' active' : ''}">Styling</h2> -->
  <Counter />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  /* styleタグの内容の適用範囲は設定したそのコンポーネント内のみとなるため、
  他のコンポーネントへ適用されることはありません。 */
  /* h2 {
    color: #ff3e00;
    font-size: 2em;
    font-weight: 700;
  } */

  /* もしグローバルに適用したい場合は、App.svelteファイルに「:global」を利用して記述することで、
  Counterコンポーネントのh2タグにもスタイルが適用されます。 */
  :global(h2) {
    color: #ff3e00;
    font-size: 2em;
    font-weight: 700;
  }

  .active {
    font-size: 3em;
    font-weight: 700;
  }

  .underline {
    text-decoration: underline;
  }
</style>
