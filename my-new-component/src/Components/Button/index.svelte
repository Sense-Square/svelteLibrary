<script>
  export let label;
  export let size;
  export let color;
  export let disabled;
</script>

<div class="primary">
  <button
  on:click
  on:blur 
  on:focus 
  on:dblclick 
  on:mouseover 
  disabled={disabled}
  class="primary">
  {label}
  </button>
</div>


<style>
  .b1{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    padding: 12px 24px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.8s ease;
  }
  button:hover{
  }
  button:focus{
    outline: none;
  }
  .small {
    font-size: 12px;
  }

  .medium {
    font-size: 16px;
  }

  .big {
    font-size: 24px;
  }
</style>