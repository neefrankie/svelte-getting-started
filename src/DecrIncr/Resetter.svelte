<script lang="typescript">
import { count } from './store.ts';

function reset() {
  count.set(0);
}
</script>

<button on:click={reset}>reset</button>
