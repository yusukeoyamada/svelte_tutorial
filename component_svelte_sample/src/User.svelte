<script>
  // $$slotsは、親コンポーネントからslotが渡されているかどうか確認することができるオブジェクト
    // 以下console出力例) { email: true, age: true, default: true }
      // emailのSlotを設定していない場合には、falseになるわけではなく、emailのプロパティが表示されません。
  // console.log($$slots);

  // slotのpropsを利用することで、子コンポーネントのデータを親コンポーネントに渡すことができる
  // let user = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   age: '25',
  //   sex: '男性',
  // };

  // export let user;

  export let users;
</script>

<!-- 親コンポーネントから子コンポーネントに、「コンテンツ」を渡したい場合 -->
  <!-- <slot />の場所に親コンポーネントから渡されるコンテンツが表示 -->
  <!-- 以下は、文字列だけ(Slotで渡すコンテンツは、通常は文字列ではない) -->
<!-- <p>この人の名前は<slot />です。</p> -->

<!-- <h2>プロファイル</h2> -->

<!-- 文字列だけではなくHTMLも渡される(Slotで渡すコンテンツは、通常はHTMLのマークアップ) -->
<!-- <slot /> -->

<!-- slotのデフォルト値を設定することができ、
もし親コンポーネントからコンテンツが渡されない場合は、
デフォルトで設定したコンテンツが表示されます。 -->
<!-- <slot><p>何もコンテンツが渡されません</p></slot> -->

<!-- <ul> -->
  <!-- 複数slotが存在する場合は、それぞれのSlotを識別するために名前をつける必要があります。
  name属性を設定して、識別できる名前を設定します。
  name属性が設定されていないものは、デフォルトのSlotとなります。 -->
  <!-- <li>名前：<slot>名無しの権兵衛</slot></li>
  <li>年齢：<slot name="age">記入なし</slot></li>
  <li>
    メールアドレス:<slot name="email">メールアドレスを持っていません。</slot>
  </li> -->

  <!-- slotでコンテンツが渡されない場合に、slotのデフォルト値を表示するのではなく、
  条件分岐を利用してその項目自体を表示させないといったことが可能 -->
  <!-- <li>名前：<slot>名無しの権兵衛</slot></li>
  {#if $$slots.age}
    <li>年齢：<slot name="age">記入なし</slot></li>
  {/if}
  <li>
    メールアドレス:<slot name="email">メールアドレスを持っていません。</slot>
  </li> -->
<!-- </ul> -->

<!-- slotのpropsを利用することで、子コンポーネントのデータを親コンポーネントに渡すことができる -->
  <!-- 「{user}」は、「user={user}」と同じ意味(オブジェクトリテラルの強化??) -->
<!-- <slot {user}>{user.lastName}</slot> -->

<!-- 親コンポーネントで定義したuserを、propsでUserコンポーネントに渡し、
slotのpropsで親コンポーネントに戻すこともできます。 -->
  <!-- 具体的には、デフォルトではfirstNameとlastNameを表示させるようになっているが、
  Userコンポーネントを変更することなく、fistNameのみ表示させるように変更するといったことが可能 -->
  <!-- slotで戻すpropsの名前は、任意の名前をつけることができるので、thingに -->
<!-- <slot thing={user}>{user.firstName} {user.lastName}</slot> -->

<!-- 複数のユーザオブジェクトを含む配列の場合にも、slot propsを利用することができます。 -->
<!-- 親コンポーネントからslotが渡されない場合には、名前がフルネームで表示されます -->
  <!-- 「{user}」は、「user={user}」と同じ意味(オブジェクトリテラルの強化??) -->
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
