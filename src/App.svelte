<script lang="typescript">
  import Nested from './Nested.svelte';
  import Thing from './Thing.svelte';
  import Inner from './Inner.svelte';
  import Checkbox from './Checkbox.svelte';
  import GroupInput from './GroupInput.svelte';
  import Textarea from './Textarea.svelte';
  import Select from './Select.svelte';
  import SelectMultiple from './SelectMultiple.svelte';
  import ContentEditable from './ContentEditable.svelte';
  import Media from './Media.svelte';
  import OnMount from './OnMount.svelte';
  import DecrIncr from './DecrIncr/DecrIncr.svelte';
  import Box from './Box.svelte';
  import { time, elapsed } from './readable-store.ts';

  export let name;
  const src = "http://placekitten.com/200/300";

  let count = 0;

  function handleClick() {
    count += 1;
  }

  console.log(`the count is ${count}`);

  let user = {
    loggedIn: false,
  }

  function toggle() {
    user.loggedIn = !user.loggedIn;
  }

  let cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
  ];

  let things = [
    { id: 1, color: '#0d0887' },
		{ id: 2, color: '#6a00a8' },
		{ id: 3, color: '#b12a90' },
		{ id: 4, color: '#e16462' },
		{ id: 5, color: '#fca636' }
  ]

  function handleRemove() {
    things = things.slice(1);
  }

  let m = {x: 0, y: 0};
  function handleMouseover(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }

  function handleMessage(event) {
    alert(event.detail.text);
  }

  let a = 1;
  let b = 2;

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });
</script>

<main>
  {#if user.loggedIn}
    <button on:click={toggle}>Log out</button>
  {:else}
    <button on:click={toggle}>Log in</button>
  {/if}

	<h1>Hello {name}!</h1>
  <input type="text" bind:value={name}/>

	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

  <div on:mouseover="{handleMouseover}">
    The mouse position is {m.x} x {m.y}
  </div>
  <img src={src} alt="A kitten {name}">
  <Nested answer={42}/>
  <Nested/>

  <button on:click={handleClick}>Clicked {count} {count === 1 ? 'time' : 'times'}</button>

  <ul>
    {#each cats as cat, i}
      <li>
        <a href="src">{i + 1}: {cat.name}</a>
      </li>
    {/each}
  </ul>

  <button on:click="{handleRemove}">Remove first thing</button>

  {#each things as thing (thing.id)}
    <Thing current={thing.color}/>
  {/each}

  <Inner on:message={handleMessage}/>

  <div>
    <input type="number" bind:value={a} min=0 max=10>
  </div>
  <div>
    <input type="range" bind:value={b} min=0, max=10>
  </div>
  <p>{a} + {b} = {a + b}</p>

  <Checkbox/>

  <GroupInput/>

  <Textarea/>

  <Select/>

  <SelectMultiple/>

  <ContentEditable/>

  <Media/>

  <OnMount/>

  <DecrIncr/>

  <Box>
    <h2>Hello!</h2>
    <p>This is a box. It can contain anything.</p>
  </Box>

  <h1>The time is {formatter.format($time)}</h1>

  <p>
    This page has been open for {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
  </p>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
