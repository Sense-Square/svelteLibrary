<script>
    import TextField from './TextField.svelte';

	let name = '';
    let focusColor='';
    let color='';
    let isFocused='';
  	
	function handleTextFieldKeyPress(event) {
    console.log(`hai premuto '${event.key}'!`);
  	}

	function handleTextFieldChange(event){
    name = event.target.value;
    }

	function handleTextFieldInput(event){
    name = event.target.value;
    }

    function handleTextFieldFocus(event){
    isFocused=event.detail.isFocused;
    focusColor=event.detail.focusColor;
    console.log('focus');
    }

    function handleTextFieldBlur(event){
    isFocused=event.detail.isFocused;
    focusColor=event.detail.focusColor;
    console.log('blur');
    }

</script>

<div id="pri">
	<p> {name} </p>
	<TextField
     bind:value={name}
     on:keypress={handleTextFieldKeyPress}
     on:focus={handleTextFieldFocus}
     on:blur={handleTextFieldBlur}
     on:input={handleTextFieldInput}
     on:change={handleTextFieldChange}
     placeholder="inserisci valore"
     focusColor={focusColor}
    />
</div>

<style>
	#pri {
		text-align: center;
	}
</style>


