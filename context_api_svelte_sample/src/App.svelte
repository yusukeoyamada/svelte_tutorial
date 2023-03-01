<script>
  import ComponentA from './ComponentA.svelte';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  // const user = {
  //   name: 'John Doe',
  //   email: 'john@example.com',
  // };

  // 以下storeのwritableを使うと、ContextAPIで設定したデータの値を更新できる
  const user = writable({
    name: 'John Doe',
    email: 'john@example.com',
  });

  // setContext関数の第一引数のContextのkeyに、'user'
  // 第二引数のContextの値に、渡したいデータを設定
    // keyに設定した値は、他のコンポーネントでデータを取り出す際に利用します。
  // setContext('user', {
  //   name: 'John Doe',
  //   email: 'john@example.com',
  // });

  setContext('user', user);

  // const changeName = () => {
  //   user.name = 'Jane Doe';
  // };

  // writableを利用した場合に、更新したデータを受け取るためには、subscribeしなければなりません。
  // $を利用することで、subscribeに関するコードを省略し、データにアクセスすることができます。
    // userから$userに変更することで、userオブジェクトの更新が行われると更新が反映されます。
  const changeName = () => {
    $user.name = 'Jane Doe';
  };

  // changeName関数の更新処理で、$を利用しない場合は、updateを利用
  // const changeName = () => {
  //   user.update((user) => {
  //     return { ...user, name: 'Jane Doe' };

  //     // 以下のようにすると、分割代入が上手くいかない
  //       // 既存のオブジェクトの中の一部の値を更新する際に、分割代入を使う場合には、
  //       // 先に展開をして、後で変更する部分を記述するようにしないといけないみたい
  //     // return { name: 'Jane Doe', ...user };
  //   });
  // };
</script>

<main>
  <!-- propsではなく、ContextAPIを利用すれば、
  AppからComponentCにデータを渡すのに、
  ComponentB, ComponentCを経由せずに、直接渡すことができます。 -->
    <!-- 以下は、propsを利用して、userオブジェクトを表示したもの -->
  <!-- <h1>Context API</h1>
  <ComponentA {user} /> -->

  <!-- 以下は、ContextAPIを利用して、userオブジェクトを表示したもの -->
  <!-- <h1>Context API</h1>
  <ComponentA /> -->

  <!-- setContextで設定した値を更新するために、ボタンを追加 -->
    <!-- ただし、Context APIで設定したデータを更新するためには、storeのwritableを利用する必要があります。 -->
  <h1>Context API</h1>
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
