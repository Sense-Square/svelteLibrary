<script>
  export let label;
  export let size = 'medium';
  export let color;
  export let disabled;
  export let primary;

</script>


  <button
  style={`background-color: ${color};`}
  class={`b1 ${size} ${primary ? 'primary' : ''}`}
  on:click
  on:blur 
  on:focus 
  on:dblclick 
  on:mouseover 
  disabled={disabled}>
  {label}
  </button>



<style>
  .b1{
    color: white;
    padding: 12px 24px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.8s ease;
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