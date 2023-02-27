<!-- 以下、readable利用例 -->

<script>
  import { readable, writable } from 'svelte/store';

  // const time = readable(0);
  // console.log('readable', time);
  const time = readable(null, set => {
    // 以下、set関数とsetIntervalを組み合わせて1秒ごとに更新される時刻を設定
    set(new Date());

    // const interval = setInterval(() => {
    //   set(new Date());
    // }, 1000);

    // return () => clearInterval(interval);
  })


  const count = writable(0);
  console.log('writable', count);

  export let name = 'Counter';
</script>

<h2>{name}コンポーネント</h2>
<div>{$time}</div>
