<!-- 以下、writable利用例 -->

<script>
  import { onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  // let count = 0
  let countValue;

  // writableは、値の読み書きを行う
    // const count = writable(0);
  // writable関数の第二引数にcallback関数を設定できる
    // しかし、実行されるのは、subscriberが設定されている場合のみ
      // 「$count」を設定した場合も、subscriberとしてカウントされ、第二引数のset関数が実行される
    // callback関数の引数には、set関数を持ちますが、必ずしも使わなくても良い
  const count = writable(0, (set) => {
    set(100);

    // unsubscribe関数が実行されたかどうか知りたい場合には、以下のように、returnに関数を設定。
      // return () => {
      //   console.log('unsubscribe execute');
      // };
  });

  // subscribeを利用することで、値が更新されると、更新した値をnotificationとして受け取ることができる
  // subscribeを実行すると、戻り値としてunsubscribe関数がくる
  const unsubscribe = count.subscribe(value => {
    countValue = value;
  });

  const increment = () => {
    // count += 1

    // callback関数の引数には現在の値を持っている
      // count.update(value => ++value);
    count.update(value => {
      console.log(value);
      return ++value;
    });
  }

  // 通知設定を、unsubscribe関数で、解除することができる
    // unsubscribe();
  // コンポーネントのアンマウント時にのみ実行させることができる
  onDestroy(() => {
    unsubscribe();
  });

  // 以下では、doubleの値は、countの更新の影響を受けない
    // let double = count * 2;
  // 以下のように、「$:」をつけて、変数宣言をすると、countの更新の影響を受ける
    // $: double = count * 2;

  // console.log()にも、「$:」を設定でき、countが更新される度に実行される
    // $: console.log(`現在のcountの値は${count}です`);

  // 以下は、複数行の場合
    // $: {
    //   console.log(`現在のcountの値は${count}です`);
    //   console.log('複数行も設定できます。');
    // }

  // <Counter name="カウンター" />のように、読んだ側で引数を定義できる
    // propsで受け取る場合はexportが必須
    // Counterコンポーネントで初期値を設定することもできる
      // AppコンポーネントのCounterタグにname propsを設定していない場合には初期値が利用される
  export let name = 'Counter';
</script>

<!-- 読んだ側で定義された引数をここで読み込める -->
<h2>{name}コンポーネント</h2>
<div>
  <!-- countの前に$をつけることで、writeble関数で設定した値を取得することができる -->
  <!-- <p>カウント: {$count}</p> -->

  <!-- $ではなく、subscribeメソッドを利用した場合 -->
  <p>カウント: {countValue}</p>

  <!-- <p>カウント: {count}</p> -->
  <!-- <p>ダブルカウント: {double}</p> -->
</div>
<div>
  <button on:click={increment}>
    <!-- count is {$count} -->

    count is {countValue}
  </button>
</div>
