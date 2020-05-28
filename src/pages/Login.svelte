<script lang="typescript">

let credentials = {
  email: '',
  password: '',
};

let errors = {
  email: '',
  password: ''
}

function submit() {
  console.log(credentials);
  errors = {
    email: 'Invalid email',
    password: 'Invalid password'
  };
}
</script>

<h2>Login</h2>

<form on:submit|preventDefault={submit}>
  <div>
    <label for="email">Email</label>
    <input type="text" id="email" bind:value={credentials.email}/>
    {#if errors.email}
      <div>{errors.email}</div>
    {/if}
  </div>

  <div>
    <label for="password">Password</label>
    <input type="password" id="password" bind:value={credentials.password}/>
    {#if errors.password}
      <div>{errors.password}</div>
    {/if}
  </div>

  <button type="submit">Submit</button>
</form>
