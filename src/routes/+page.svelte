<script>
	import { onMount } from 'svelte';
	
	onMount(() => {
	    function createStars() {
            const numStars = 100;
            for (let i = 0; i < numStars; i++) {
                let star = document.createElement('div');
                star.classList.add('star');
                document.body.appendChild(star);
                star.style.top = Math.random() * window.innerHeight + 'px';
                star.style.left = Math.random() * 2560 + 'px';
                star.style.animationDuration = Math.random() * 2 + 1 + 's';
                star.style.animationDelay = Math.random() * 2 + 's';
            }
        }
        createStars();
    });
</script>


<div class="content">
    <img src="/logo_noctua.svg" alt="Noctua, uma corujinha roxa com grandes olhos" class="logo" />
    <h1 color="white">Noctua<span>Tek</span></h1>

    <p>contato: <a href="mailto:hello@noctuatek.com">hello@noctuatek.com</a></p>
</div>

<style>
    h1 {
        font-size: 32px;
        color: #2e1a47;
    }

    h1 span {
        font-weight: bold;
        color: #E67E22;
    }
    .content {
        background: rgba(255, 255, 255, .9);
        padding: 30px;
        width: 600px;
        height: 300px;
        border-radius: 20px;
        margin: 0 60px;

        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }

    .logo {
        z-index: 100;
        width: 100px;
    }
</style>
