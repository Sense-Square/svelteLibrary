<script>
  import './button.css';
  import Ripple from '../../actions/Ripple';
  /**
   * Button contents
   * @type {string}
   */
  export let label;
  
  /**
   * How large should the button be?
   * @type {'small' | 'medium' | 'big'} 
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

  export let ripple = {};

  $: {
    if (elevated == true) {
      filled = false;
      tonal = false;
      outlined = false;
      text = false;
    } else if (filled == true) {
      elevated = false;
      tonal = false;
      outlined = false;
      text = false;
    } else if (tonal == true) {
      elevated = false;
      filled = false;
      outlined = false;
      text = false;
    } else if (outlined == true) {
      elevated = false;
      filled = false;
      tonal = false;
      text = false;
    } else if (text == true) {
      elevated = false;
      filled = false;
      tonal = false;
      outlined = false;
    }
  }
</script>

  
  
  <button
  use:Ripple = {ripple}
  class={`b1 ${size} ${elevated ? 'elevated' : ''} ${filled ? 'filled' : ''} ${tonal ? 'tonal' : ''} ${outlined ? 'outlined': ''} ${text ? 'text' : ''}`}
  on:click
  on:blur 
  on:focus 
  on:dblclick 
  on:mouseover 
  disabled={disabled}>
  {label}
  </button>
  
   
