<script lang="typescript">
import { count } from './store.ts';

function increment() {
  count.update(n => n + 1);
}
</script>

<button on:click={increment}>+</button>
