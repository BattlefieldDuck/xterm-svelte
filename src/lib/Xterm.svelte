<script lang="ts">
	import '@xterm/xterm/css/xterm.css';
	import { onMount, createEventDispatcher } from 'svelte';
	import type { ITerminalOptions, ITerminalInitOnlyOptions, XtermEvent } from './index.js';

	let parent: HTMLElement;
	let props = { ...$$restProps };

	export let options: (ITerminalOptions & ITerminalInitOnlyOptions) | undefined = undefined;

	const dispatch = createEventDispatcher<XtermEvent>();

	onMount(async () => {
		const { Terminal } = await import('@xterm/xterm');
		const terminal = new Terminal(options);

		terminal.onBell(() => dispatch('bell'));
		terminal.onBinary((data) => dispatch('binary', data));
		terminal.onCursorMove(() => dispatch('cursormove'));
		terminal.onData((data) => dispatch('data', data));
		terminal.onKey((data) => dispatch('key', data));
		terminal.onLineFeed(() => dispatch('linefeed'));
		terminal.onRender((data) => dispatch('render', data));
		terminal.onWriteParsed(() => dispatch('writeparsed'));
		terminal.onResize((data) => dispatch('resize', data));
		terminal.onScroll((data) => dispatch('scroll', data));
		terminal.onSelectionChange(() => dispatch('selectionchange'));
		terminal.onTitleChange((data) => dispatch('titlechange', data));

		terminal.open(parent);
		dispatch('load', { terminal });
	});
</script>

<div bind:this={parent} class={props.class} style={props.style}></div>
