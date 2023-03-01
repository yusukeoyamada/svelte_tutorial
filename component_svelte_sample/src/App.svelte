<script>
  // import Child from './Child.svelte';
  import User from './User.svelte';

  // 子コンポーネントで発火したイベントを受け取ると実行される
  // const displayAlert = () => {
  //   alert('子コンポーネントからイベントを受け取りました。');
  // };

  // dispatch関数から渡されたデータは、eventオブジェクトを利用して取得することができます。
  // eventオブジェクトのdetailプロパティに、データが入っています。
  // const displayAlert = (event) => {
  //   alert(event.detail);
  // };

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
  <!-- <h1>Component</h1> -->

  <!-- 親コンポーネントで、子コンポーネントで発火したイベントを受け取るための設定 -->
    <!-- on:の後には、子コンポーネントで設定したイベント名を設定
    イベントを受け取ると、displayAlert関数を実行 -->
  <!-- <Child on:alertButtonClicked={displayAlert} /> -->

  <h1>Slot</h1>

  <!-- 子コンポーネント側に渡したいコンポーネントはコンポーネントタグの間に挿入 -->
    <!-- 以下は、文字列だけ(Slotで渡すコンテンツは、通常は文字列ではない) -->
  <!-- <User>John Doe</User> -->

  <!-- 文字列だけではなくHTMLも渡される(Slotで渡すコンテンツは、通常はHTMLのマークアップ) -->
    <!-- pタグを利用したHTML分を、Userタグの間に挿入 -->
  <!-- <User>
    <p>私の名前はJohn Doeです。</p>
    <p>メールアドレスはjohn@exmaple.com</p>
  </User> -->

  <!-- slotのデフォルト値を設定することができ、
  もし親コンポーネントからコンテンツが渡されない場合は、
  デフォルトで設定したコンテンツが表示されます。 -->
  <!-- <User /> -->

  <!-- <User> -->
    <!-- タグにslot属性をつけて、Userコンポーネントでつけた名前を設定します。
    slot属性がついていないものが、デフォルトとなります。 -->
    <!-- John Doe
    <span slot="age">30</span>
    <span slot="email">john@exmaple.com</span> -->

    <!-- spanを利用したくない場合には、「svelte:fragment」を利用することができます。 -->
    <!-- John Doe
    <svelte:fragment slot="age">30</svelte:fragment>
    <span slot="email">john@exmaple.com</span> -->

    <!-- slotでコンテンツが渡されない場合に、slotのデフォルト値を表示するのではなく、
    条件分岐を利用してその項目自体を表示させないといったことが可能 -->
    <!-- John Doe
    <span slot="email">john@exmaple.com</span> -->
  <!-- </User> -->

  <!-- 親側のコンポーネントは、子コンポーネントのslotのpropsから渡されるデータを、
  letを利用して取得することができます。 -->
    <!-- 子コンポーネントから渡されたuserを利用して、子コンポーネントに渡すコンテンツとして利用 -->
      <!-- 「let:user」は、「let:user={user}」と同じ意味(オブジェクトリテラルの強化??) -->
  <!-- <User let:user>
    <h2>{user.firstName}</h2>
  </User> -->

  <!-- 親コンポーネントで定義したuserを、propsでUserコンポーネントに渡し、
  slotのpropsで親コンポーネントに戻すこともできます。 -->
    <!-- 具体的には、デフォルトでは、firstNameとlastNameを表示させるようになっているが、
    Userコンポーネントを変更することなく、fistNameのみ表示させるように変更するといったことが可能 -->
    <!-- 「{user}」は、「user={user}」と同じ意味(オブジェクトリテラルの強化??) -->
      <!-- propsはthingという名前渡されるので、let:の後は、thingを設定 -->
  <!-- <User {user} let:thing><h2>{thing.firstName}</h2></User>
  <User {user} /> -->

  <!-- 複数のユーザオブジェクトを含む配列の場合にも、slot propsを利用することができます。 -->
    <!-- {users}は、users={users}と同じ意味 -->
    <!-- Userコンポーネントにpropsでusersを渡し、userが戻されるので、
    戻されたuserを使って、slotのコンテンツとして子コンポーネントに渡しています。 -->
  <!-- <User {users} let:user>{user.email}</User>
  <User {users} /> -->

  <!-- 上記で名前付きSlotを利用している場合 -->
  <User {users}>
    <h2 slot="title">ユーザ一覧</h2>
    <!-- <span slot="name" let:user>{user.email}</span> -->
    <svelte:fragment slot="name" let:user>{user.email}</svelte:fragment>
  </User>
  <User {users} />
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
