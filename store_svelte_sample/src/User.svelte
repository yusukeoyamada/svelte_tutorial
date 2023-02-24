<script>
  // import { onDestroy } from 'svelte';
  // import UserStore from './stores/UserStore.js';
  import user from './stores/UserStore.js';

  // let user = '';

  // const unsubscribe = UserStore.subscribe((value) => {
  //   user = value;
  // });
  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<!-- Userコンポーネントでもwritable storeのデータにアクセスできる -->
<h2>User Email</h2>
<!-- <div>{user.email}</div> -->

<!-- Svelteはsubscribeとunsubscribeを管理する機能を備えているため、その機能を利用することができます。
利用するためimportしたstoreの名前の前に$(ダラー)をつけます。 -->
<div>{$user.email}</div>
