<script>
  import ComponentA from './ComponentA.svelte';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  // const user = {
  //   name: 'John Doe',
  //   email: 'john@example.com',
  // };

  // setContext('user', {
  //   name: 'John Doe',
  //   email: 'john@example.com',
  // });

  // 以下storeのwritableを使うと、ContextAPIで設定したデータの値は更新できる
  const user = writable({
    name: 'John Doe',
    email: 'john@example.com',
  });

  setContext('user', user);

  // userから$userに変更することでuserオブジェクトの更新が行われると更新が反映されます。
  const changeName = () => {
    $user.name = 'Jane Doe';
  };

  // changeName関数の更新処理で$を利用しない場合はupdateを利用
  // const changeName = () => {
  //   user.update((user) => {
  //     return { ...user, name: 'Jane Doe' };
  //   });
  // };
</script>

<main>
  <!-- propsではなくContextAPIを利用すれば、AppからComponentCにデータを渡すのにComponentB, ComponentCを経由せずに、直接渡すことができます。 -->
  <!-- 以下は、propsを利用してuserオブジェクトを表示したもの -->
  <h1>Context API</h1>
  <!-- <ComponentA {user} /> -->

  <!-- 以下は、ContextAPIを利用してuserオブジェクトを表示したもの -->
  <button on:click={changeName}>change Name</button>
  <ComponentA />
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
