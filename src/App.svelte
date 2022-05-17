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
        console.log('Swiped left');
    }
    
    if (touchendX >= touchstartX) {
        console.log('Swiped right');
    }
    
    if (touchendY <= touchstartY) {
		displayRandomBackground(10)
    }
    
    if (touchendY >= touchstartY) {
		displayRandomBackground(10)
    }
    
    if (touchendY === touchstartY) {
		displayRandomBackground(10)
    }
}
</script>

<svelte:window on:keydown={handleKeydown}/>

<main>
</main>

<style>
</style>