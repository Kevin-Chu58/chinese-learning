<script>
    import { page } from '$app/stores';
    import cloud from '$lib/images/cloud.svg';

    export let text = '';
    export let isHeader = false;
    export let path = '/';

    $: isOnPage = false;

    const getAriaCurrent = () => {
        isOnPage = $page.url.pathname === path;
        return isOnPage;
    }
</script>

<li class={isHeader ? 'header' : ''} aria-current={getAriaCurrent() ? 'page' : undefined}>
    <a href={path}>{text}</a>

    {#if isOnPage}
        <img src={cloud} alt=''/>
    {/if}
</li>

<style>
    .header {
		font-size: large;
        font-weight: bold;
		margin-top: 10px;
	}

    img {
        width: 25px;
        height: 25px;
    }

	li {
		border: 2px solid transparent;
		border-radius: 10px;
		font-size: medium;
		padding-bottom: 2px;
        position: relative;
        display: flex;
        flex-direction: row;
	}

    li[aria-current='page'] a {
		color: var(--color-theme-1);
	}

	li:hover {
		background-color: var(--primary-sunset-light-2);
		color: var(--color-theme-1);
	}

    a {
        color: inherit;
        text-decoration: none;
    }
</style>
