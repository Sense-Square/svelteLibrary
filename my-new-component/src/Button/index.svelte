<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher();

  export let label;

  function handleClick()
  {
    dispatch('message', {text: 'bottone premuto!'});
  }

</script>
<div class="b1">
  <button on:click = {handleClick}>{label}</button>
</div>


<style>
  .b1{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: cornflowerblue;
    color: white;
    padding: 12px 24px;
    font-size: medium;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.8s ease;
  }
  button:hover{
    background-color: #0b7dda;
  }
  button:focus{
    outline: none;
    background-color: #5F9EA0;
  }
</style>