import App from './App.svelte';
import './index.css';
import { setupMode } from '@lib/functions/darkMode';

setupMode();

const app = new App({
	target: document.getElementById('app'),
});

export default app;
