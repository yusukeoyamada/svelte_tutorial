<script>
  import ComponentC from './ComponentC.svelte';

  // 各コンポーネントで設定したpropsの設定は必要ない
  // export let user;
</script>

<!-- 以下は、propsを利用して、userオブジェクトを表示したもの -->
<!-- <h2>ComponentB</h2>
<ComponentC {user} /> -->

<!-- 以下は、ContextAPIを利用して、userオブジェクトを表示したもの -->
<h2>ComponentB</h2>
<ComponentC />
