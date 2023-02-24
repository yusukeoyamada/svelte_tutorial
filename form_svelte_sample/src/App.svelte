<script>
  // import { onMount } from 'svelte';
	let name = 'John';
  // let password_forget = false;

  // const handleInput = (e) => {
  //   name = e.target.value;
  // };

  const handleSubmit = () => {
    console.log(name);
  };
  // イベント修飾子のpreventDefaultを利用せずeventオブジェクトを利用することで同様の設定を行うことができます。
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(name);
  // };

  // DOM要素の情報を保存する変数inputElを定義します。
  // 参照したいinput要素にbind:this={inputEL}を設定します。
  // let inputEl;
  // onMount(() => {
  //   inputEl.focus();
  //   console.log(inputEl);
  // });
</script>

<main>
  <h1>Hello {name}</h1>
	<!-- <h1>Hello {name} {password_forget}</h1> -->
  <!-- <input type="text" bind:value={name} /> -->

  <!-- bindディレクティブを利用しない場合でもon:inputイベントを利用して同様の設定を行うことができます。 -->
  <!-- <input type="text" on:input={handleInput} value={name} /> -->

  <!-- ページを開いた時にinput要素にフォーカスを当てたい場合など直接にDOMにアクセスを行いたい場合があります。
  その場合はDOMへの参照のためbind:thisを利用することができます。 -->
  <!-- <div>
    <input type="text" bind:value={name} bind:this={inputEl} />
  </div> -->

  <!-- ブラウザ上にpassword_forgetの値を表示させているので、チェックボックスにチェックを入れるとforget_passwordの値はfalseからtrueに変わることが確認できます。 -->
  <!-- <div>
    <input type="checkbox" bind:checked={password_forget} /> forget password
  </div> -->

  <!-- イベントの横にpreventDefaultを設定することでページのリロードが行われなくなりコンソールにはinput要素に入力した文字列が表示されます。 -->
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <input type="text" bind:value={name} />
    </div>
    <button type="submit">送信</button>
  </form>

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
