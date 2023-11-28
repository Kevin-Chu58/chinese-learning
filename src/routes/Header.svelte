<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import 'iconify-icon';

	export let onClick = () => {};
	export let hidden = true;
</script>

<header>
	<div class='header-container'>
		<button on:click={onClick}>
			<iconify-icon icon={hidden ? "material-symbols:density-medium" : "material-symbols:close"} />
		</button>

		<div class='header-chi'>
			世界和图中文<br />
			教育学会
		</div>
		<div class='header-eng'>
			World Hetu Chinese Language<br />
			Education Association
		</div>
	</div>
	
	<div class='white-line' />
	<!-- <div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div> -->

	<!-- <nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav> -->
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: var(--header-height);
		background: var(--primary-linear);
		box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.1);

		color: white;
	}

	.header-container {
		display: flex;
		flex-direction: row;
	}

	button {
		padding: 0 10px;
	}

	iconify-icon {
		margin: auto 0;
		display: flex;
		text-align: center;
		font-size: 30px;
		padding: 5px;
		border: 2px solid transparent;
		border-radius: 5px;

		transition: .5s ease;
	}

	iconify-icon:hover {
		background-color: var(--primary-red-light);
		transform: scale(1.1);
	}

	.header-chi {
		width: 110px;
		text-align: center;
		font-size: 17px;
	}

	.header-eng {
		width: 300px;
		text-align: center;
	}

	.white-line {
		border-top: 2px solid white;
		padding-top: 3px;
	}

	/* .corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	} */
</style>
