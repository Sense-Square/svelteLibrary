<script>
  import './card.css';
  import '../Button/button.css';
  import '../../global.css';
  import Ripple from '../../actions/Ripple';
  import Button from '../Button/index.svelte';

  /**
  * Is Card disabled?
  * @type {string}
  */
  export let disabled = false;
   
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

  /**
  * What is the Card's width?
  * @type {text} 
  */
  export let width = '300px';

  /**
  * What is the Card's height?
  * @type {text} 
  */
  export let height = '200px';

  $: {
  if (elevated) {
    filled = false;
    tonal = false;
    outlined = false;
  } else if (filled) {
    elevated = false;
    tonal = false;
    outlined = false;
  } else if (tonal) {
    elevated = false;
    filled = false;
    outlined = false;
  } else if (outlined) {
    elevated = false;
    filled = false;
    tonal = false;
  }
}
</script>

<div class={`card ${elevated ? 'elevatedC' : ''} ${filled ? 'filledC' : ''} ${tonal ? 'tonalC' : ''} ${outlined ? 'outlinedC': ''} ${disabled ? 'disabledC' : ''}`}
style="width: {width}; height: {height}"
use:Ripple = {ripple}
on:click
on:blur
on:focus
on:dblclick
on:mouseover
on:keydown>
<slot />
</div>