<script lang="ts">
	import { Xterm, XtermAddon } from '$lib/index.js';
	import type { ITerminalOptions, ITerminalInitOnlyOptions, Terminal } from '$lib/index.js';

	let options: ITerminalOptions & ITerminalInitOnlyOptions = {};

	async function onLoad(event: CustomEvent<{ terminal: Terminal }>) {
		console.log('Child component has loaded');
		const terminal = event.detail.terminal;

		// FitAddon Usage
		const { FitAddon } = await XtermAddon.FitAddon();
		const fitAddon = new FitAddon();
		terminal.loadAddon(fitAddon);
		fitAddon.fit();

		terminal.onKey(({ key }) => {
			terminal.write(key);
		});
	}

	function onBell() {
		console.log('onBell()');
	}

	function onBinary(event: CustomEvent<string>) {
		const data = event.detail;
		console.log('onBinary()', data);
	}

	function onCursorMove() {
		console.log('onCursorMove()');
	}

	function onData(event: CustomEvent<string>) {
		const data = event.detail;
		console.log('onData()', data);
	}

	function onKey(event: CustomEvent<{ key: string; domEvent: KeyboardEvent }>) {
		const data = event.detail;
		console.log('onKey()', data);
	}

	function onLineFeed() {
		console.log('onLineFeed()');
	}

	function onRender(event: CustomEvent<{ start: number; end: number }>) {
		const data = event.detail;
		console.log('onRender()', data);
	}

	function onWriteParsed() {
		console.log('onWriteParsed()');
	}

	function onResize(event: CustomEvent<{ cols: number; rows: number }>) {
		const data = event.detail;
		console.log('onResize()', data);
	}

	function onScroll(event: CustomEvent<number>) {
		const data = event.detail;
		console.log('onScroll()', data);
	}

	function onSelectionChange() {
		console.log('onSelectionChange()');
	}

	function onTitleChange(event: CustomEvent<string>) {
		const data = event.detail;
		console.log('onTitleChange()', data);
	}
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Xterm
	{options}
	on:load={onLoad}
	on:bell={onBell}
	on:binary={onBinary}
	on:cursormove={onCursorMove}
	on:data={onData}
	on:key={onKey}
	on:linefeed={onLineFeed}
	on:render={onRender}
	on:writeparsed={onWriteParsed}
	on:resize={onResize}
	on:scroll={onScroll}
	on:selectionchange={onSelectionChange}
	on:titlechange={onTitleChange}
/>
