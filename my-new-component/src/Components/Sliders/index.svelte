<script>
import './sliders.css'

    export let value = 0;
    export let min;
    export let max;
    export let active = true;
    export let disabled = false;

    function handleChange(event){
        value = event.target.value;
    }

</script>

<div class="label-container">
    <p class="label-text">Valore: {value}</p>
  </div>
<input 
type="range" 
min={min} 
max={max} 
disabled={disabled}
bind:value 
on:change
on:update
on:input={handleChange}/>