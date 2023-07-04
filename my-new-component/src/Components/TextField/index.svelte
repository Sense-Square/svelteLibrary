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
  export let size = 'small';

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
  {#if label}
    <label class={`label ${size} {outlined ? 'outlined-label' : ''} ${isActive ? 'focused' : ''}`}>{label}</label>
  {/if}
  {#if filled}
  <div class="indicator {size}"></div>
  {/if}
</div>
