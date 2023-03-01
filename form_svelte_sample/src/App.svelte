<script>
  // import { onMount } from 'svelte';
	let name = 'John';
  // let password_forget = false;

  // eventオブジェクトを利用して、input要素に設定されている値を「e.target.value」で取得して、nameに設定
  // const handleInput = (ev) => {
  //   name = ev.target.value;
  // };

  // const handleSubmit = () => {
  //   console.log(name);
  // };

  // イベント修飾子のpreventDefaultを利用せず、eventオブジェクトを利用することで、
  // 同様の設定を行うことができます。
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(name);
  };

  // DOM要素の情報を保存する変数inputElを定義します。
    // ライフサイクルフックのonMount後には、コンポーネントの要素にアクセス可能なので
    // inputEl.focus()でフォーカスを設定
      // ページを開くとinput要素にフォーカスされた状態で表示
  // let inputEl;
  // onMount(() => {
  //   inputEl.focus();
  //   // <input type=”text”>が表示
  //     // input要素の値を取得したい場合には、「inputEl.value」で行うことができます。
  //   console.log(inputEl);
  // });
</script>

<main>
  <!-- <h1>Hello {name}</h1> -->

  <!-- input要素に入力した値を変数nameに反映させるために、bindディレクティブを利用 -->
  <!-- <input type="text" bind:value={name} /> -->

  <!-- bindディレクティブを利用しない場合でもon:inputイベントを利用して同様の設定を行うことができます。 -->
  <!-- <input type="text" on:input={handleInput} value={name} /> -->

  <!-- ページを開いた時にinput要素にフォーカスを当てたい場合など、直接にDOMにアクセスを行いたい場合があります。
  その場合は、DOMへの参照のため、「bind:this」を利用することができます。 -->
    <!-- 参照したいinput要素に、「bind:this={inputEL}」を設定します。 -->
  <!-- <input type="text" bind:value={name} bind:this={inputEl} /> -->

  <!-- bindディレクティブを利用することで、checkboxの値を取得することができます。 -->
    <!-- ブラウザ上にpassword_forgetの値を表示させているので、
    チェックボックスにチェックを入れるとforget_passwordの値はfalseからtrueに変わることが確認できます。 -->
	<!-- <h1>Hello {name} {password_forget}</h1>
  <div>
    <input type="text" bind:value={name} />
  </div>
  <div>
    <input type="checkbox" bind:checked={password_forget} /> forget password
  </div> -->

  <form on:submit={handleSubmit}>
    <div>
      <input type="text" bind:value={name} />
    </div>
    <button type="submit">送信</button>
  </form>

  <!-- formのデフォルトの動作で、submitが行われるとページのリロードが行われます。
  それにより、ブラウザのコンソールには、一瞬name変数に保存された文字列が表示されますが、すぐに消えます
  デフォルトの動作を停止させるために、Event Modifiers(イベント修飾子)が用意されています。 -->
    <!-- イベントの横に、Event Modifiers(イベント修飾子)の「preventDefault」を設定することで、
    ページのリロードが行われなくなりコンソールにはinput要素に入力した文字列が表示されます。 -->
  <!-- <form on:submit|preventDefault={handleSubmit}>
    <div>
      <input type="text" bind:value={name} />
    </div>
    <button type="submit">送信</button>
  </form> -->

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
