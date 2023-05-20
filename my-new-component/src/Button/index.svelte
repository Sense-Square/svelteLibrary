<script>
  export let label;
</script>

<div class="b1">
  <button on:click on:blur on:focus on:dblclick on:mouseover>{label}</button>
</div>


<style>
  .b1{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: cornflowerblue;
    color: white;
    padding: 12px 24px;
    font-size: medium;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.8s ease;
  }
  button:hover{
    background-color: #0b7dda;
  }
  button:focus{
    outline: none;
    background-color: #5F9EA0;
  }
</style>