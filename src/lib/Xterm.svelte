<script lang="ts">
	import '@xterm/xterm/css/xterm.css';
	import { onMount } from 'svelte';
	import type { XtermProps } from './index.js';

	let parent = $state<HTMLElement>();

	let {
		options,
		onBell,
		onBinary,
		onCursorMove,
		onData,
		onKey,
		onLineFeed,
		onRender,
		onWriteParsed,
		onResize,
		onScroll,
		onSelectionChange,
		onTitleChange,
		onLoad
	}: XtermProps = $props();

	onMount(async () => {
		const { Terminal } = await import('@xterm/xterm');
		const terminal = new Terminal(options);

		terminal.onBell(() => onBell?.());
		terminal.onBinary((data) => onBinary?.(data));
		terminal.onCursorMove(() => onCursorMove?.());
		terminal.onData((data) => onData?.(data));
		terminal.onKey((data) => onKey?.(data));
		terminal.onLineFeed(() => onLineFeed?.());
		terminal.onRender((data) => onRender?.(data));
		terminal.onWriteParsed(() => onWriteParsed?.());
		terminal.onResize((data) => onResize?.(data));
		terminal.onScroll((data) => onScroll?.(data));
		terminal.onSelectionChange(() => onSelectionChange?.());
		terminal.onTitleChange((data) => onTitleChange?.(data));

		if (parent) {
			terminal.open(parent);
			onLoad?.(terminal);
		} else {
			console.error('[xterm-svelte] Parent element not found');
		}
	});
</script>

<div bind:this={parent}></div>
