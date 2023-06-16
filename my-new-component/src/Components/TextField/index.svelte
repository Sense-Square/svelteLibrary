<script>
  import "./textfield.css"

  export let placeholder;
  export let value='';
  export let filled = false;
  export let outlined = false;

</script>

<input type="text" placeholder={placeholder}
  class={`t1 ${filled ? 'filledT' : ''} ${outlined ? '' : ''}`}
  value={value}
  on:input
  on:change
  on:keypress
  />