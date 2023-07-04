<script>
    import './checkbox.css';

    export let checked = false;
    export let enabled = false;
    export let disabled = false;
    export let hovered = false;
    export let focused = false;
    export let pressed = false;



</script>

<label class={`checkbox ${checked ? 'selected' : ''}`}>
    <input 
      type="checkbox" 
      class="c1"
      bind:checked={checked}
      on:change
    />
    <span class="checkmark"></span>
  </label>

{#if checked}
<p>Checked</p>
{:else}
<p>Unchecked</p>
{/if}