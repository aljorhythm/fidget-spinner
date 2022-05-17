<script lang="ts">
	let r = 0, g = 0, b = 0, a = 0;
	let rDelta = Math.round(Math.random() * 20);
	let gDelta = Math.random() * 20;
	let bDelta = Math.random() * 20;
	
	function displayRandomBackground(seed) {
		r = (r + (seed % rDelta)) % 250;
		g = (g + (seed % gDelta)) % 250;
		b = (b + (seed % bDelta)) % 250;
		document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
	}

	function handleKeydown(event) {
		const keycode = event.keyCode;
		displayRandomBackground(keycode);
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>
</main>

<style>
</style>