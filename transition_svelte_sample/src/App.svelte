<script>
  import Counter from './lib/Counter.svelte';

  // import { fly } from 'svelte/transition';
  // import { fade } from 'svelte/transition';
  import { fly, fade } from 'svelte/transition';
  let show = true;

  export let name;
</script>

<main>
  <h1>Hello {name}!</h1>

  <h1>Transition</h1>
  <button on:click={() => (show = !show)}>Toggle</button>
  {#if show}
    <!-- 「transition:fade」を設定 -->
      <!-- もっとも、以下だと、最初のレンダリングでは、”Fadeの動作確認”は、fadeが行われず表示されます。 -->
        <!-- 最初のレンダリングでもtransitionを適用させたい場合には、
        main.jsのAppコンポーネントの引数にintroプロパティでtrueを設定 -->
    <!-- <p transition:fade>Fadeの動作確認</p> -->

    <!-- fadeのパラメータは、delay, duration, easingを設定することができます。
      delayは、アニメーションが開始されるまでの時間
      durationは、アニメーションの時間
      easingは、アニメーションの速度の変化 -->
    <p transition:fade={{ delay: 300, duration: 3000 }}>Fadeの動作確認</p>

    <!-- flyは、パラメータで位置の設定も行えるため、要素が移動するアニメーションを設定することができます。
      パラメータのx, yで位置の設定を行うことができ、
      下記のように「x:100」を設定することで、表示から非表示になる際にx方向に移動しながら非表示になっていきます。 -->
    <p transition:fly={{ x: 100 }}>Flyの動作確認</p>

    <!-- 表示する場合と非表示になる場合のアニメーションを別に設定
      その場合は、transitionではなく、in, outを利用 -->
    <p in:fly={{ x: 100 }} out:fade>FadeとFlyの動作確認</p>

    <!-- transitionの開始、終了時に何か処理を実行したい場合には、イベントを利用することができます。
      非表示になる時には、「outrostart」, 「outroend」が順に実行される。
      非表示から表示になる時には、「introstart」, 「introend」が順に実行される。 -->
    <p
      transition:fade
      on:introstart={() => console.log('intro started')}
      on:outrostart={() => console.log('outro started')}
      on:introend={() => console.log('intro ended')}
      on:outroend={() => console.log('outro ended')}
    >
      Fade(intro, outro)の動作確認
    </p>

    <!-- pタグのようなDOM要素ではなく、importしたコンポーネントでは、
    transitionディレクティブを利用することはできません。 -->
    <!-- <Counter transition:fade /> -->

    <Counter name="カウンター"/>
  {/if}
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
