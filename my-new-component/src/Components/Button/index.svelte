<script>
  /**
   * Button contents
   * @type {string}
   */
  export let label;
  
  /**
   * How large should the button be?
   * @type {'small' | 'medium' | 'large'} 
   */
  export let size = 'medium';

  /**
   * Is the button disabled?
   * @type {boolean} 
   */
  export let disabled = false;

  /**
   * Is the button filled?
   * @type {boolean} 
   */
  export let filled = false;

  /**
   * Is the button elevated?
   * @type {boolean} 
   */
  export let elevated = false;

  /**
   * Is the button tonal?
   * @type {boolean} 
   */
  export let tonal = false;

  /**
   * Is the button outlined?
   * @type {boolean} 
   */
  export let outlined = false;

  /**
   * Is the button text?
   * @type {boolean} 
   */
  export let text = false;

</script>


  <button
  
  class={`b1 ${size} ${elevated ? 'elevated' : ''} ${filled ? 'filled' : ''} ${tonal ? 'tonal' : ''} ${outlined ? 'outlined': ''} ${text ? 'text' : ''}`}
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
    color: var(--md-sys-color-primary);
    padding: 12px 24px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 20px;
    transition: background-color 0.8s ease;
    min-width: 120px;
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
    background-color: var(--md-sys-color-primary-container);
    color: white;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .filled {
    background-color: var(--md-sys-color-primary-container);
    color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .tonal{
    background-color: var(--md-sys-color-secondary-container);
    color: whitesmoke;
    border: 1px 
    solid rgba(0, 0, 0, 0.2);
  }

  .outlined {
    background-color: var(--md-sys-color-outline);
    color: var(--md-sys-color-primary);
    border: 1px solid var(--md-sys-color-primary);
  }

  .text {
    background-color: transparent;
    color: var(--md-sys-color-primary);
    border: none;
  }
</style>