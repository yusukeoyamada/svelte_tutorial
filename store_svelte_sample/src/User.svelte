<script>
  // import { onDestroy } from 'svelte';
  // import UserStore from './stores/UserStore.js';
  import user from './stores/UserStore.js';

  // let user = '';

  // writable storeのデータにアクセスするためには、subscribeを行う必要が
  // const unsubscribe = UserStore.subscribe((value) => {
  //   user = value;
  // });
  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<!-- Userコンポーネントでも、writable storeのデータにアクセスできる -->
<!-- <h2>User Email</h2>
<div>{user.email}</div> -->

<!-- Svelteは、subscribeとunsubscribeを管理する機能を備えています。
その機能を利用するためには、importしたstoreの名前の前に、$(ダラー)をつけます。 -->
<h2>User Email</h2>
<div>{$user.email}</div>
