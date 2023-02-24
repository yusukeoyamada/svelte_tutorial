<script>
  import Child from './Child.svelte';
  import User from './User.svelte';

  const displayAlert = (event) => {
    alert(event.detail);
  };

  // let user = {
  //   firstName: 'Jane',
  //   lastName: 'Doe',
  //   age: '25',
  //   sex: '男性',
  // };

  const users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    },
    {
      id: 2,
      firstName: 'Kevin',
      lastName: 'Wood',
      email: 'kevin@example.com',
    },
    {
      id: 3,
      firstName: 'Harry',
      lastName: 'Bosch',
      email: 'harry@test.com',
    },
  ];
</script>

<main>
  <h1>Component</h1>
  <!-- 親コンポーネントであるAppコンポーネントで受け取るための設定 -->
  <Child on:alertButtonClicked={displayAlert} />

  <h1>Slot</h1>
  <!-- 以下は、文字列だけ -->
  <!-- <User>John Doe</User> -->

  <!-- 文字列だけではなくHTMLも渡される -->
  <!-- <User>
    <p>私の名前はJohn Doeです。</p>
    <p>メールアドレスはjohn@exmaple.com</p>
  </User> -->

  <!-- <User> -->
    <!-- John Doe -->
    <!-- spanを利用したくない場合にはsvelte:fragmentを利用することができます。 -->
    <!-- <span slot="age">30</span> -->
    <!-- 条件分岐を利用してその項目自体を表示させないといったことが可能 -->
    <!-- <svelte:fragment slot="age">30</svelte:fragment> -->
    <!-- <span slot="email">john@exmaple.com</span> -->
  <!-- </User> -->

  <!-- Userコンポーネントで定義したuserを親コンポーネントに戻す -->
  <!-- <User let:user>
    <h2>{user.firstName}</h2>
  </User> -->

  <!-- 親コンポーネントで定義したuserを、propsでUserコンポーネントに渡し、slotのpropsで親コンポーネントに戻すこともできます。 -->
  <!-- 具体的には、デフォルトではfirstNameとlastNameを表示させるようになっているが、Userコンポーネントを変更することなく
  fistNameのみ表示させるように変更するといったことが可能 -->

  <!-- propsはthingという名前渡されるのでlet:の後はthingを設定 -->
  <!-- 戻されたuser情報を利用して表示したUserコンポーネント -->
  <!-- <User {user} let:thing><h2>{thing.firstName}</h2></User> -->
  <!-- デフォルトのまま表示させたUserコンポーネント -->
  <!-- <User {user} /> -->

  <!-- 複数のユーザオブジェクトを含む配列の場合にもslot propsを利用することができます。 -->
  <!-- {users}は、users={users}と同じ意味 -->
  <!-- <User {users} let:user>{user.email}</User> -->

  <!-- 上記で名前付きSlotを利用している場合 -->
  <User {users}>
    <h2 slot="title">ユーザ一覧</h2>
    <span slot="name" let:user>{user.email}</span>
  </User>
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
