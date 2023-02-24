<script>
  // $$slotsは親コンポーネントからslotが渡されているかどうか確認することができるオブジェクト
  // console.log($$slots);

  // slotのpropsを利用することで子コンポーネントのデータを親コンポーネントに渡す
  // let user = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   age: '25',
  //   sex: '男性',
  // };

  // export let user;

  export let users;
</script>

<!-- 親コンポーネントから子コンポーネントに”コンテンツ”を渡したい場合 -->
<!-- <p>この人の名前は<slot />です。</p> -->
<!-- レイアウトファイルのコンテンツ部分のみSlotを通してコンテンツを渡す -->
<h2>プロファイル</h2>
<!-- <slot /> -->

<!-- <ul> -->
  <!-- 複数slotが存在する場合はそれぞれのSlotを識別するために名前をつける必要があります。
  name属性を設定して識別できる名前を設定します。
  name属性が設定されていないものはデフォルトのSlotとなります。 -->
  <!-- <li>名前：<slot>名無しの権兵衛</slot></li>
  {#if $$slots.age}
    <li>年齢：<slot name="age">記入なし</slot></li>
  {/if}
  <li>
    メールアドレス:<slot name="email">メールアドレスを持っていません。</slot>
  </li> -->
<!-- </ul> -->

<!-- <slot key={value}>の設定 -->
<!-- slotのpropsを利用することで子コンポーネントのデータを親コンポーネントに渡す -->
<!-- {user}は、user={user}と同じ意味 -->
<!-- <slot {user}>{user.lastName}</slot> -->

<!-- 親コンポーネントで定義したuserを、propsでUserコンポーネントに渡し、slotのpropsで親コンポーネントに戻すこともできます。 -->
<!-- 具体的には、デフォルトではfirstNameとlastNameを表示させるようになっているが、Userコンポーネントを変更することなく
fistNameのみ表示させるように変更するといったことが可能 -->
<!-- <slot thing={user}>{user.firstName} {user.lastName}</slot> -->

<!-- 複数のユーザオブジェクトを含む配列の場合にもslot propsを利用することができます。 -->
<!-- 親コンポーネントからslotが渡されない場合には名前がフルネームで表示されます。今回は渡されている。 -->
<!-- {#each users as user}
  <li><slot {user}>{user.firstName} {user.lastName}</slot></li>
{/each} -->

<!-- 上記で名前付きSlotを利用している場合 -->
<slot name="title"><p>ユーザ</p></slot>
<ul>
  {#each users as user}
    <li><slot name="name" {user}>{user.firstName} {user.lastName}</slot></li>
  {/each}
</ul>
