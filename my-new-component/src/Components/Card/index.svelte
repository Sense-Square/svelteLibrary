<script>
   import './card.css'
   import '../Button/button.css'
   import Ripple from '../../actions/Ripple';
   import Button from '../Button/index.svelte';

   export let title='';
   export let description='';
   export let buttonLabel = 'click me';
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
    <div class="button1">
      <Button
      class={` ${elevated ? 'elevated' : ''} `}
      label={buttonLabel} 
      disabled={disabled}
      size=medium/>
    </div>
    
    
</div>