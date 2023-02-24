import { writable } from 'svelte/store';

const user = writable({
  name: 'John Doe',
  email: 'john@example.com',
});

export default user;
