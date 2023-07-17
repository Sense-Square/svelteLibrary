<script>
   import './card.css'
   export let title='';
   export let labelButton;
   export let description='';
   export let image;
   export let buttonLabel;
   
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

<div class={`card ${elevated ? 'elevated' : ''} ${filled ? 'filled' : ''} ${tonal ? 'tonal' : ''} ${outlined ? 'outlined': ''}`}>
    <h3>{title}</h3>
    <p>{description}</p>
</div>