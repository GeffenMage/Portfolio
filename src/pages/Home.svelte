<script lang="ts">
	import Navbar from '@lib/components/Navbar/Navbar.svelte';
</script>

<div class="m-0 p-0 h-screen overflow-hidden">
	<Navbar />
	<main>
		<div
			class="hero min-h-screen"
			style="background-image: url('./src/assets/home_background.jpg');"
		>
			<div class="hero-overlay bg-opacity-60" />
			<div class="text-center hero-content text-neutral-content">
				<div class="max-w-md">
					<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
					<p class="mb-5">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button class="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	@import '@css/home.css';
</style>
