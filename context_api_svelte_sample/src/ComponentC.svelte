<script>
  // export let user;

  import { getContext } from 'svelte';
  const user = getContext('user');

  // 以下は、$を利用しない場合のコード。subscribeを行う必要が。subscribeした場合は必ずunsubscribeを行う必要が。
  // import { getContext, onDestroy } from 'svelte';
  // let user;
  // const userContext = getContext('user');
  // const unscribe = userContext.subscribe((value) => {
  //   user = value;
  // });
  // onDestroy(unscribe);
</script>

<h2>ComponentC</h2>
<h3>ユーザ</h3>
<!-- このままだと、name:undefinedになっている。
writableを利用した場合に、更新したデータを受け取るためには、subscribeしなければなりません。
$を利用することでsubscribeに関するコードを省略しデータにアクセスすることができます。 -->
<!-- <div>name:{user.name}</div> -->
<div>name:{$user.name}</div>
