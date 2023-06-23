<script>
  import './textfield.css';

  /**
   * TextField placeholder
   * @type {string}
   */
  export let placeholder;

  /**
   * TextField value
   * @type {string}
   */
  export let value = '';

  /**
   * TextField value
   * @type {string}
   */
  export let label;

  /**
   * Is TextField on focus?
   * @type {boolean}
   */
  export let isActive = false;

  /**
   * Is TextField filled?
   * @type {boolean}
   */
  export let filled = false;

  /**
   * Is TextField outlined?
   * @type {boolean}
   */
  export let outlined = false;

  /**
   * How large should the textfield be?
   * @type {'small' | 'medium' | 'big'} 
   */
  export let size = 'medium';

  $:{
    if(filled == true){
      outlined = false;
    }
    if(outlined == true){
      filled = false;
    }
  }
</script>

<div class="text-field" class:active={isActive} class:filledT={filled} class:outlinedT={outlined}>
  {#if label}
    <label class={`label ${size}`}>{label}</label>
  {/if}
  <input
    type="text"
    class={`input ${size}`}
    value={value}
    placeholder={placeholder}
    on:input
    on:change
    on:keypress
    on:focus={() => isActive = true}
    on:blur={() => isActive = false}
  />
  {#if filled}
  <div class="indicator"></div>
  {/if}

</div>
