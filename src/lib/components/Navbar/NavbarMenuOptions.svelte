<script lang="ts">
	import Icon from 'fa-svelte';
	import type { MenuOption } from '@lib/types';

	export let options: MenuOption[];
</script>

<ul
	tabindex="0"
	class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
>
	{#each options as option}
		<li class="my-2">
			<button on:click={option.action} type="button" class="">
				{#if option.icon != null}
					<Icon
						class="inline-block w-5 mr-2 stroke-current fa-3x"
						icon={option.icon}
					/>
				{/if}
				{#if option.text != null}
					{option.text}
				{/if}
			</button>
		</li>
	{/each}
</ul>

<style>
	/* your styles go here */
</style>
