<script>
   import './card.css'
   import '../Button/button.css'
   import Ripple from '../../actions/Ripple';
   import Button from '../Button/index.svelte';

   /**
   * Card title
   * @type {string}
   */
   export let title='';

   /**
   * Card description
   * @type {string}
   */
   export let description='';

   /**
   * Button label
   * @type {string}
   */
   export let buttonLabel = 'Click me';

   /**
   * Is Card disabled?
   * @type {string}
   */
   export let disabled = false;
   /**
   * How large should the button's card be?
   * @type {'small' | 'medium' | 'big'} 
   */
   export let size = undefined;
   
   export let ripple = {};
    
    /**
     * Is the Card filled?
     * @type {boolean} 
     */
    export let filled = false;

    /**
     * Is the Card elevated?
     * @type {boolean} 
     */
    export let elevated = false;

    /**
     * Is the Card tonal?
     * @type {boolean} 
     */
    export let tonal = false;

    /**
     * Is the Card outlined?
     * @type {boolean} 
     */
    export let outlined = false;

    $: {
    if (elevated == true) {
      filled = false;
      tonal = false;
      outlined = false;
    } else if (filled == true) {
      elevated = false;
      tonal = false;
      outlined = false;
    } else if (tonal == true) {
      elevated = false;
      filled = false;
      outlined = false;
    } else if (outlined == true) {
      elevated = false;
      filled = false;
      tonal = false;
    }
  }
</script>

<div class={`card ${elevated ? 'elevatedC' : ''} ${filled ? 'filledC' : ''} ${tonal ? 'tonalC' : ''} ${outlined ? 'outlinedC': ''}`}
use:Ripple = {ripple}
on:click
on:blur
on:focus
on:dblclick
on:mouseover
on:keydown
on:keydown>
    <h3>{title}</h3>
    <p>{description}</p>
      <Button
      class={`${elevated ? 'elevated' : ''} ${filled ? 'filled' : ''} ${tonal ? 'tonal' : ''} ${outlined ? 'outlined': ''} ${size}`}
      label={buttonLabel} 
      disabled={disabled}
      elevated={elevated}
      filled={filled}
      tonal={tonal}
      outlined={outlined}/>
</div>