<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  export let value='';
  export let placeholder='';
  export let color='green';

  function handleChange(event){
    value = event.target.value;
    dispatch("input", value);
  }

  function handleInput(event){
    value = event.target.value;
    dispatch("input", value);
  }

  function handleKeyPress(event) {
    console.log(`hai premuto '${event.key}'!`);
  }

</script>

<style>
  ::placeholder {
    text-align: center;
  }
  input{
    text-align: center;
  }

  input:focus{
    background-color: #f3f3df;
  }
</style>

<input type="text" bind:value={value} placeholder={placeholder}
   style="color:{color};"
   on:input
   on:change
   on:keypress />