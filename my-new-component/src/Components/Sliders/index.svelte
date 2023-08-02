<script>
  import './sliders.css'
  
      export let value = 0;
      export let min;
      export let max;
      export let active = true;
      export let disabled = false;
      export let discrete = false;
  
      function handleChange(event){
          value = event.target.value;
      }
  
  </script>
  
  <div class="label-container">
      <p class="label-text">{value}</p>
    </div>
  
  {#if discrete}
  <input 
  type="range" 
  min={min} 
  max={max}
  step="10"
  disabled={disabled}
  bind:value 
  on:change
  on:update
  on:input={handleChange}/>
  {:else}
  <div class="tick-mark">
  <input 
  type="range" 
  min={min} 
  max={max}
  disabled={disabled}
  tickMark
  bind:value 
  on:change
  on:update
  on:input={handleChange}/>
  </div>
  {/if}


