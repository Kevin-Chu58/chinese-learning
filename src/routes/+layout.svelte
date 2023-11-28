<script>
	import { Amplify } from 'aws-amplify';
    import awsmobile from '../aws-exports';
    Amplify.configure(awsmobile);

	import Header from './Header.svelte';
	import SideBar from './SideBar.svelte';
	import "../app.css";
	import './styles.css';

	let showSidebar = false;
</script>

<div class="app">
	<Header onClick={() => showSidebar = !showSidebar} hidden={!showSidebar} />

	<div class="app-container">
		<!-- {#if showSidebar} -->
			<div class="sidebar-container" class:hidden={!showSidebar}>
				<SideBar />
			</div>
		<!-- {/if} -->
		
		<div class="main-container">
			<main>
				<slot />
			</main>

			<!-- <footer>
				<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
			</footer> -->
		</div>
	</div>

</div>

<style>
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.app-container {
		display: flex;
		flex-direction: row;
		height: calc(100vh - var(--header-height));
	}

	.sidebar-container {
		position: fixed;
		width: var(--sidebar-width);
		min-width: var(--sidebar-width);
		transition: .5s ease;
	}

	.hidden {
		margin-left: calc(var(--sidebar-width) * -1);
	}

	.main-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* width: 100vw; */
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		min-width: 600px;
		width: 100vw;
		box-sizing: border-box;

    	
	}

	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: var(--footer-height);
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
