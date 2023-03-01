<script>
  // import { onDestroy } from 'svelte';
  // import UserStore from './stores/UserStore.js';
  import user from './stores/UserStore.js';
  import User from './User.svelte';

  // let user = '';

  // subscribeを実行すると、unsubscribe関数が戻されます。
  // const unsubscribe = UserStore.subscribe((value) => {
  //   user = value;
  //   console.log(value);
  // });

  // subscribeでは、データの更新が行われると更新したデータを受け取ることができるので、そのデータを利用して設定した処理を実行することができます。
  // subscribeを実行することで、writable storeのデータが取得できることがわかります。
    // valueには、writable関数に設定した初期値が表示
  // UserStore.subscribe((value) => {
  //   user = value;
  //   console.log(value);
  // });

  // writable storeに新しい値を設定するため、setメソッドを利用することができます。
    // ボタンをクリックすると新しいユーザ情報が設定されるように、setNewUser関数を追加
  // const setNewUser = () => {
  //   UserStore.set({
  //     name: 'Jane Doe',
  //     email: 'jane@example.com',
  //   });
  // };

  // 以下、subscribeの代わりに、$を利用
  const setNewUser = () => {
    $user = { name: 'Jane Doe', email: 'jane@example.com' };
  }
  // $ありでも、setメソッドも利用可能
  // const setNewUser = () => {
  //   user.set({
  //     name: 'Jane Doe',
  //     email: 'jane@example.com',
  //   });
  // };


  // writable storeに新しい値を設定するためには、updateメソッドを利用します。
    // ボタンをクリックするとユーザ名が更新されるように、updateUser関数を追加
      // updateメソッドでは、引数のcallback関数の引数に現在のstoreのデータが渡されるので(user)、
      // 渡されたデータを更新して戻すことで、storeのデータが更新されます。
  // 以下、「name: 'Jane Doe'」に変更するver
  // const updateUser = () => {
  //   UserStore.update((user) => {
  //     console.log(user);
  //     return { ...user, name: 'Jane Doe' };

  //     // 以下のようにすると、分割代入が上手くいかない
  //       // 既存のオブジェクトの中の一部の値を更新する際に、分割代入を使う場合には、
  //       // 先に展開をして、後で変更する部分を記述するようにしないといけないみたい
  //     // return { name: 'Jane Doe', ...user };
  //   });
  // };

  // 以下、「email: 'jane@example.com'」に変更するver
    // Userコンポーネントでも、writable storeのデータにアクセスできるか確認する用
  // const updateUser = () => {
  //   UserStore.update((user) => {
  //     return { ...user, email: 'jane@example.com' };
  //   });
  // };

  // 以下、subscribeの代わりに、$を利用
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

  <!-- 以下、subscribeを利用した場合 -->
  <!-- <h2>{user.name}</h2>
  <button on:click={setNewUser}>New User</button>
  <button on:click={updateUser}>Update User</button>
  <User /> -->

  <!-- 以下、subscribeの代わりに、$を利用した場合 -->
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
