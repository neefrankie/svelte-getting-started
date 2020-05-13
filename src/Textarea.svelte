<script lang="typescript">
import marked from 'marked';

let value = `Some words are *itealic*, some are **bold**`;
</script>

<style>
  textarea { width: 100%; height: 200px; }
</style>

<textarea bind:value={value}></textarea>

{@html marked(value)}
