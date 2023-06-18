<script>
  import './textfield.css';

  export let placeholder;
  export let value = '';
  export let label;
  export let isActive = false;
  export let filled = false;
  export let outlined = false;
</script>

<div class="text-field" class:active={isActive} class:filledT={filled} class:outlined={outlined}>
  {#if label}
    <label class="label">{label}</label>
  {/if}
  <input
    type="text"
    class="input"
    value={value}
    placeholder={placeholder}
    on:input
    on:change
    on:keypress
    on:focus={() => isActive = true}
    on:blur={() => isActive = false}
  />
  <div class="indicator"></div>
</div>
