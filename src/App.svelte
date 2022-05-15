<script lang="ts">
	let r = 0, g = 0, b = 0;
	let rDelta = Math.round(Math.random() * 50);
	let gDelta = Math.random() * 50;
	let bDelta = Math.random() * 50;
	function handleKeydown(event) {
		const keycode = event.keyCode;
		r = (r + (event.keyCode) % rDelta) % 250;
		g = (g + (event.keyCode) % gDelta) % 250;
		b = (b + (event.keyCode) % bDelta) % 250;
		document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>
</main>

<style>
</style>