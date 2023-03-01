import { writable } from 'svelte/store';

// svelte/storeからimportしたwritable関数の引数に、初期値を設定しStoreの設定は完了
const user = writable({
  name: 'John Doe',
  email: 'john@example.com',
});

export default user;
