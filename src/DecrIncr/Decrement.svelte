<script lang="typescript">
import { count } from './store.ts';

function decrement() {
  count.update(n => n - 1);
}
</script>

<button on:click={decrement}>-</button>
