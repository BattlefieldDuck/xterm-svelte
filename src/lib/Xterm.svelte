<script lang="ts">
	import '@xterm/xterm/css/xterm.css';
	import { onMount, createEventDispatcher } from 'svelte';
	import type { ITerminalOptions, ITerminalInitOnlyOptions, Terminal } from '@xterm/xterm';

	let parent: HTMLElement;
	export let options: (ITerminalOptions & ITerminalInitOnlyOptions) | undefined = undefined;

	const dispatch = createEventDispatcher<{ load: { terminal: Terminal } }>();

	onMount(async () => {
		let xterm = await import('@xterm/xterm');
		const terminal = new xterm.Terminal(options);
		terminal.open(parent);
		dispatch('load', { terminal });
	});
</script>

<div bind:this={parent}></div>
