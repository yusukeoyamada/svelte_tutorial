<script>
  import { onDestroy } from 'svelte';
  // import UserStore from './stores/UserStore.js';
  import user from './stores/UserStore.js';
  import User from './User.svelte';

  // let user = '';

  // subscribeではデータの更新が行われると更新したデータを受け取ることができるのでそのデータを利用して設定した処理を実行することができます。
  // subscribeを実行することでwritable storeのデータが取得できることがわかります。
  // UserStore.subscribe((value) => {
  //   user = value;
  //   console.log(value);
  // });

  // subscribeを実行するとunsubscribe関数が戻されます。
  // const unsubscribe = UserStore.subscribe((value) => {
  //   user = value;
  //   console.log(value);
  // });

  // ボタンをクリックすると新しいユーザ情報が設定されるようにsetNewUser関数を追加
  // const setNewUser = () =>
  //   UserStore.set({
  //     name: 'Jane Doe',
  //     email: 'jane@example.com',
  //   });

  const setNewUser = () =>
    ($user = { name: 'Jane Doe', email: 'jane@example.com' });

  // setメソッドも利用可能
  // const setNewUser = () =>
  //   UserStore.set({
  //     name: 'Jane Doe',
  //     email: 'jane@example.com',
  //   });

  // ボタンをクリックするとユーザ名が更新されるようにupdateUser関数を追加
  // updateメソッドでは、引数のcallback関数の引数に現在のstoreのデータが渡されるので(user)、渡されたデータを更新して戻すことで、storeのデータが更新されます。
  // const updateUser = () =>
  //   UserStore.update((user) => {
  //     console.log(user);
  //     return { ...user, email: 'jane@example.com' };
  //   });

  const updateUser = () => {
    $user.email = 'jane@example.com';
  };

  // $ありでも、updateメソッドも利用可能
  // const updateUser = () =>
  //   user.update((user) => {
  //     return { ...user, email: 'jane@example.com' };
  //   });

  // アンマウント時にsubscribeを停止するため、ライフサイクルフックのonDestroyでunsubscribe関数を実行
  // subscribeを停止するためには、必ずunsubscribe関数を実行する必要が
  // unsubscribeを設定せず、コンポーネントのマウント、アンマウントを繰り返すと
  // subscribe関数が停止されず、新しいsubscribe関数が実行されるため、メモリリークにつながる可能性が
  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<main>
  <h1>Store writable</h1>
  <!-- <div>{user.name}</div> -->
  <h2>{$user.name}</h2>
  <button on:click={setNewUser}>New User</button>
  <button on:click={updateUser}>Update User</button>
  <User />
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
