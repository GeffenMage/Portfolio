<script lang="ts">
	import type { MenuOption } from '@lib/types';

	import { faLanguage, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

	import { switchMode } from '@lib/functions/darkMode';

	import NavbarLink from './NavbarLink.svelte';
	import NavbarLogo from './NavbarLogo.svelte';
	import NavbarMenu from './NavbarMenu.svelte';

	const languageMenuOptions: MenuOption[] = [
		{
			text: '日本語',
			action: () => {
				console.log('change to japanese');
			},
		},
		{
			text: 'English',
			action: () => {
				console.log('change to English');
			},
		},
		{
			text: 'Portugês Brasileiro',
			action: () => {
				console.log('');
			},
		},
	];
	const languageMenuIcon = faLanguage;

	let darkModeIcon = faMoon;
	let lightModeIcon = faSun;
</script>

<nav
	class="navbar 
    shadow-lg bg-neutral 
    text-neutral-content dark:bg-gray-900"
>
	<div class="navbar-start">
		<NavbarLogo />
	</div>
	<div class="hidden px-2 mx-2 navbar-center lg:flex">
		<div class="flex items-stretch">
			<NavbarLink
				action={() => {
					console.log('home');
				}}
				text={'Home'}
			/>
			<NavbarLink
				action={() => {
					console.log('Projects');
				}}
				text={'Projects'}
			/>
			<NavbarLink
				action={() => {
					console.log('About');
				}}
				text={'About'}
			/>
			<NavbarLink
				action={() => {
					console.log('Contact');
				}}
				text={'Contact'}
			/>
		</div>
	</div>
	<div class="navbar-end">
		<div class="flex items-stretch">
			<NavbarLink action={switchMode} icon={lightModeIcon} />
			<NavbarMenu
				menuIcon={languageMenuIcon}
				menuOptions={languageMenuOptions}
			/>
		</div>
	</div>
</nav>

<style>
	@import '@css/navbar.css';
</style>
