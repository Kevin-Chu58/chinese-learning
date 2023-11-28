<script>
// @ts-nocheck

    import iconicSemicircleTop from '$lib/images/iconic-semicircle-top.svg';
    import iconicSemicircleBottom from '$lib/images/iconic-semicircle-bottom.svg';

    /**
	 * @type {{ [s: string]: any; } }
	 */
     export let texts = [];
     export let linkText = '';
     export let linkHref = '';
</script>

<div class="iconic-circle-container">
    <img src={iconicSemicircleTop} alt=''/>

    <div class="text-container">
        <div class="chi-text">
            {#each texts as text}
                {text} <br />
            {/each}
        </div>
    </div>

    <div class="link-button">
        <button>
            <a href={linkHref}>
                {linkText}
            </a>
        </button>
    </div>

    <img src={iconicSemicircleBottom} alt=''/>
</div>

<style>
    .iconic-circle-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    img {
        --width: 46vw;
        width: var(--width);
        height: calc(var(--width) / 2);
        margin: calc(var(--width) / -20) auto;
    }

    .text-container {
        background-color: var(--primary-red);
        color: white;
        text-align: center;
        margin: 0 auto;
        width: 50vw;
    }

    .chi-text {
        font-size: 40px;
    }

    .link-button {
        text-align: center;
        color: var(--primary-red);
    }

    button a {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
        font-size: 20px;
    }

    a:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }

    button:hover a {
        padding-right: 25px;

        
    }

    button:hover a:after {
        opacity: 1;
        right: 0;
    }
</style>