<script>
  export let label;
  export let size;
  export let color;
</script>

<div class="b1">
  <button
  on:click
  on:blur 
  on:focus 
  on:dblclick 
  on:mouseover 
  class = "button {size}"
  style="background-color: {color}">
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
    background-color: cornflowerblue;
    color: white;
    padding: 12px 24px;
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