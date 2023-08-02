<script>
    import './switch.css';
   /**
   * Is the switch checked?
   * @type {string}
   */
    export let isChecked = false;
    /**
    * Is the switch disabled?
    * @type {string}
    */
    export let disabled = false;
</script>
  
<label class="switch" aria-label="Toggle Switch">
    <input 
    type="checkbox"
    bind:checked= {isChecked}
    on:change
    disabled={disabled}/>
    <span class="slider"></span>
</label>