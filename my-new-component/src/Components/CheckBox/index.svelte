<script>
    import './checkbox.css';

    export let checked = false;
    export let enabled = false;
    export let disabled = false;

    function toggleEnabled() {
    enabled = !enabled;
    }
    $:{
      if(enabled == true)
        disabled = false;
    }
   
</script>

<label class={`checkbox ${checked ? 'selected' : ''} ${enabled ? 'enabled' : ''} ${disabled ? 'disabled' : ''}`}>
  <div class="state-layer"></div>
    <input
      type="checkbox" 
      class="c1"
      bind:checked = {checked}
      disabled = {disabled}
      on:change
    />
    <span class="checkmark"></span>
  </label>


