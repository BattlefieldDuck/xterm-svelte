import Xterm from '$lib/Xterm.svelte';
import { XtermAddon } from './XtermAddon.js';
import type { XtermEvent } from './XtermEvent.js';

export { Xterm, XtermAddon };
export type * from '@xterm/xterm';
export type { XtermEvent };
