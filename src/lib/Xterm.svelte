<script lang="ts">
	import '@xterm/xterm/css/xterm.css';
	import { onMount, createEventDispatcher } from 'svelte';
	import type { ITerminalOptions, ITerminalInitOnlyOptions, Terminal } from '@xterm/xterm';

	let parent: HTMLElement;
	export let options: (ITerminalOptions & ITerminalInitOnlyOptions) | undefined = undefined;
	let props = { ...$$restProps };

	const dispatch = createEventDispatcher<{ load: { terminal: Terminal } }>();

	onMount(async () => {
		let xterm = await import('@xterm/xterm');
		const terminal = new xterm.Terminal(options);
		terminal.open(parent);
		dispatch('load', { terminal });
	});
</script>

<div class={props.class} style={props.style} bind:this={parent}></div>
