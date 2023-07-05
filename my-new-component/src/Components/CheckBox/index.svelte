<script>
    import './checkbox.css';

    export let checked = false;
    export let enabled = false;
    export let disabled = false;
    export let focused = false;
    export let pressed = false;
    export let hovered = true;

    function toggleEnabled() {
    enabled = !enabled;
    }
    $:{
      if(enabled == true)
        disabled = false;
    }
   
</script>

<label class={`checkbox ${checked ? 'selected' : ''} ${enabled ? 'enabled' : ''} ${disabled ? 'disabled' : ''} ${hovered ? 'hovered' : ''}`}>
  <div class="state-layer"></div>
    <input
      type="checkbox" 
      class="c1"
      bind:checked = {checked}
      disabled = {disabled}
      on:change
      on:mouseenter={() => hovered = true}
      on:mouseleave={() => hovered = false}
    />
    <span class="checkmark"></span>
  </label>
  
{#if checked}
<p>Checked</p>
{:else}
<p>Unchecked</p>
{/if}