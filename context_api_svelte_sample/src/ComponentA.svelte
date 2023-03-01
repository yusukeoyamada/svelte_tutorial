<script>
  import ComponentB from './ComponentB.svelte';

  // 各コンポーネントで設定したpropsの設定は必要ない
  // export let user;
</script>

<!-- 以下は、propsを利用して、userオブジェクトを表示したもの -->
<!-- <h2>ComponentA</h2>
<ComponentB {user} /> -->

<!-- 以下は、ContextAPIを利用して、userオブジェクトを表示したもの -->
<h2>ComponentA</h2>
<ComponentB />
