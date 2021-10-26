<script lang="ts">
	import Icon from 'fa-svelte';
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

	export let text: String = null;
	export let icon: IconDefinition = null;
	export let action: () => void;
</script>

<div class="flex-none">
	{#if icon != null}
		{#if text != null}
			<button on:click={action} class="btn btn-ghost btn-sm rounded-btn">
				<Icon class="inline-block w-5 mr-2 stroke-current fa-2x" {icon} />
				{text}
			</button>
		{:else}
			<button on:click={action} class="btn btn-square btn-ghost">
				<Icon class="inline-block w-6 h-6 stroke-current fa-2x" {icon} />
			</button>
		{/if}
	{:else}
		<button on:click={action} class="btn btn-ghost btn-sm rounded-btn">
			{text}
		</button>
	{/if}
</div>

<style scoped>
	/* your styles go here */
</style>
