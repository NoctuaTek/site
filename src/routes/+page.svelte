<script>
    import { onMount } from 'svelte';
    
    onMount(() => {
        function createStars() {
            const numStars = 100;
            const starContainer = document.querySelector('#main');

            if (starContainer) {
                while (starContainer.querySelector('.star')) {
                    starContainer.removeChild(starContainer.querySelector('.star'));
                }

                for (let i = 0; i < numStars; i++) {
                    let star = document.createElement('div');
                    star.classList.add('star');
                    starContainer.appendChild(star);
                    star.style.top = Math.random() * 100 + 'vh';
                    star.style.left = Math.random() * 100 + 'vw';
                    star.style.animationDuration = Math.random() * 2 + 1 + 's';
                    star.style.animationDelay = Math.random() * 2 + 's';
                }
            }
        }

        createStars();

        window.addEventListener('resize', createStars);
    });
</script>

<div id="main">
    <div class="content">
        <img src="/logo_noctua.svg" alt="Noctua, uma corujinha roxa com grandes olhos" class="logo" />
        <h1 color="white">Noctua<span>Tek</span></h1>

        <span class="contact">contato: <a href="mailto:hello@noctuatek.com">hello@noctuatek.com</a></span>
    </div>
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

    span.contact {
        font-size: 13px;
        position: absolute;
        bottom: 5px;
    }

    span.contact a {
        color: #2e1a47;
        font-weight: bold;
    }

    #main {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        display: flex;
	justify-content: center;
	align-items: center;
    }

    .content {
        position: relative;
        background: rgba(255, 255, 255, .9);
        padding: 30px;
        width: 600px;
        height: 300px;
        border-radius: 20px;
        margin: 0 30px;

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
