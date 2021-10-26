<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import type { MenuOption } from '@lib/types';

	import Icon from 'fa-svelte';
	import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

	import NavbarMenuOptions from './NavbarMenuOptions.svelte';

	export let menuIcon: IconDefinition = faBars;
	export let menuOptions: MenuOption[];
</script>

<div class="dropdown dropdown-end">
	<button tabindex="0" class="btn btn-square btn-ghost">
		<Icon class="inline-block w-5 stroke-current fa-2x" icon={menuIcon} />
	</button>
	<NavbarMenuOptions options={menuOptions} />
</div>

<style>
	/* your styles go here */
</style>
