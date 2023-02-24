<script>
  // import { onMount } from 'svelte';
  // let users = [];

  // onMount(async () => {
    // vueの場合、fetch()の部分は、axios.get()
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.json();
  //   console.log(data);
  //   users = data;
  // });

  // HTMLのマークアップの部分で{#await…ブロックを利用することでpromise処理を行うことができます。
  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    if (response.ok) {
      return users;
    } else {
      throw new Error(response.status);
    }
  };
  let promise = fetchUsers();
</script>

<h2>ユーザ一覧</h2>
<!-- <ul> -->
  <!-- ユーザリストの項目の一部を削除などによって変更した場合に期待通りに動作しない場合があります。
  その場合はリストを一意に識別するkeyを利用することで対応することができます。
  取得したユーザ情報にはidという一意の識別子がついているのでidをkeyとして利用したい場合は、以下 -->
  <!-- {#each users as user, index (user.id)}
    <li>{index}.{user.name}</li>
  {/each} -->

  <!-- eachでは分割代入を利用することもできます。 -->
  <!-- {#each users as { name, id }, index (id)}
    <li>{index}.{name}</li>
  {/each} -->

  <!-- {#each…ブロックでは{:else}を利用することができます。
  利用することでデータが取得までに”Loaing…”をブラウザ上に表示させるといったことが可能になります。 -->
  <!-- {#each users as user}
    <li>{user.name}</li>
  {:else}
    <p>Loading...</p>
  {/each} -->
<!-- </ul> -->

<!-- HTMLのマークアップの部分で{#await…ブロックを利用することでpromise処理を行うことができます。 -->
{#await promise}
  <p>Loading...</p>
{:then users}
  <ul>
    {#each users as user}
      <li>{user.name}</li>
    {/each}
  </ul>
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
