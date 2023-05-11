<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  export let value='';
  export let placeholder='';
  export let color='green';
  export let focusColor='#f3f3df';
  export let isFocused=false;

  function handleChange(event){
    value = event.target.value;
    dispatch("input", value);
  }

  function handleInput(event){
    value = event.target.value;
    dispatch("input", value);
  }

  function handleFocus(){
    isFocused=true;
    focusColor='#f3f3df';
    dispatch('focus', {isFocused,focusColor});
  }

  function handleBlur(){
    isFocused=false;
    dispatch('blur', {isFocused, focusColor});
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
   style="color:{color}; background-color:{isFocused ? focusColor : ''};"
   on:input
   on:change
   on:focus
   on:blur
   on:keypress />