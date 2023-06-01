<script>
  export let theme = 'light';
</script>

<style include="./MaterialApp.css" global>
</style>

<div class="s-app theme--{theme}">
  <slot />
</div>
