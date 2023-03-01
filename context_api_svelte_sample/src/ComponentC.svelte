<script>
  import { getContext } from 'svelte';
  // import { getContext, onDestroy } from 'svelte';

  // 各コンポーネントで設定したpropsの設定は必要ない
  // export let user;

  // ComponentCでuserオブジェクトのnameを表示するため、
  // Appコンポーネントで設定したkeyの'user'を、getContext関数の引数に指定してデータを取り出す
  const user = getContext('user');

  // 以下は、$を利用しない場合のコード。subscribeを行う必要が。
  // subscribeした場合は必ずunsubscribeを行う必要が。
    // unsubscribeを行わない場合は、コンポーネントがアンマウントされた場合など
    // subscribeの処理が残された状態になり、メモリリークにつながる可能性も
  // let user;
  // const userContext = getContext('user');
  // const unscribe = userContext.subscribe((value) => {
  //   user = value;
  // });
  // onDestroy(unscribe);
</script>

<!-- 以下は、propsを利用して、userオブジェクトを表示したもの -->
<!-- <h2>ComponentC</h2>
<h3>ユーザ</h3>
<div>name:{user.name}</div> -->

<!-- 以下は、ContextAPIを利用して、userオブジェクトを表示したもの(ここは変化なし) -->
<!-- <h2>ComponentC</h2>
<h3>ユーザ</h3>
<div>name:{user.name}</div> -->

<!-- writableを追加したため、ブラウザ上に表示されていたユーザ名は、undefinedと。
writableを利用した場合に、更新したデータを受け取るためには、subscribeしなければなりません。
$を利用することで、subscribeに関するコードを省略し、データにアクセスすることができます。 -->
<h2>ComponentC</h2>
<h3>ユーザ</h3>
<div>name:{$user.name}</div>
