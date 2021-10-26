function isDarkModeEnabled(): Boolean {
	try {
		const storage = window.localStorage;
		const value = storage.getItem('darkMode');
		return JSON.parse(value);
	} catch (error) {
		console.log('error :>> ', error);
		return false;
	}
}

function setupMode() {
	try {
		const storage = window.localStorage;
		const value = storage.getItem('darkMode');
		if (value === undefined) setDarkMode();
	} catch (error) {
		console.log('error :>> ', error);
	}
}

function disableDarkMode() {
	try {
		const storage = window.localStorage;
		const bodyClass = window.document.body.classList;
		const className = 'dark';

		storage.setItem('darkMode', 'false');
		bodyClass.remove(className);
	} catch (error) {
		console.log('error :>> ', error);
	}
}

function setDarkMode() {
	try {
		const storage = window.localStorage;
		const bodyClass = window.document.body.classList;
		const className = 'dark';

		storage.setItem('darkMode', 'true');
		bodyClass.add(className);
	} catch (error) {
		console.log('error :>> ', error);
	}
}

function switchMode() {
	const enabled = isDarkModeEnabled();

	enabled ? disableDarkMode() : setDarkMode();
}

export { switchMode, setupMode };
