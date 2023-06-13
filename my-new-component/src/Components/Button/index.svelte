<script>
  export let label;
  export let size = 'medium';
  export let disabled;
  export let filled;
  export let elevated;

</script>


  <button
  
  class={`b1 ${size} ${elevated ? 'elevated' : ''} ${filled ? 'filled' : ''}`}
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
    color: var(--md-sys-color-on-secondary);
    padding: 12px 24px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 14px;
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

  .elevated {
    background-color: var(--md-sys-color-secondary-container);
    color: white;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .filled {
    background-color: var(--md-sys-color-primary-container);
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
</style>