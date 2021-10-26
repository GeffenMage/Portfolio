import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface MenuOption {
	text?: String;
	icon?: IconDefinition;
	action(): void;
}

export type { MenuOption };
