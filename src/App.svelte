<script lang="ts">
	let r = 0, g = 0, b = 0;
	let rDelta = Math.random() * 30;
	let gDelta = Math.random() * 30;
	let bDelta = Math.random() * 30;
	
	function displayRandomBackground(seed) {
		r = (r + (seed % rDelta)) % 250;
		g = (g + (seed % gDelta)) % 250;
		b = (b + (seed % bDelta)) % 250;

		document.body.style.transition = `background-color 0.3s linear`;
		document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	}

	function handleKeydown(event) {
		const keycode = event.keyCode;
		displayRandomBackground(keycode);
	}

	let touchstartX = 0;
	let touchstartY = 0;
	let touchendX = 0;
	let touchendY = 0;

const gestureZone = document.body;

gestureZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gestureZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
    if (touchendX <= touchstartX) {
		displayRandomBackground(touchendX)
    }
    
    if (touchendX >= touchstartX) {
        displayRandomBackground(touchendX)
    }
    
    if (touchendY <= touchstartY) {
		displayRandomBackground(touchendY)
    }
    
    if (touchendY >= touchstartY) {
		displayRandomBackground(touchstartX)
    }
    
    if (touchendY === touchstartY) {
		displayRandomBackground(touchendY)
    }
}
</script>

<style>
</style>

<svelte:window on:keydown={handleKeydown}/>

<main>
</main>