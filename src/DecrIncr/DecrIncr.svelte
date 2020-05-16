<script lang="typescript">
import { onDestroy } from 'svelte';
import { count } from './store.ts';
import Incrementer from './Increment.svelte';
import Decrementer from './Decrement.svelte';
import Resetter from './Resetter.svelte';

let count_value;

const unsubscribe = count.subscribe(value => {
  count_value = value;
});

onDestroy(unsubscribe);
</script>

<h1>The count is {count_value}</h1>

<Incrementer/>
<Decrementer/>
<Resetter/>
