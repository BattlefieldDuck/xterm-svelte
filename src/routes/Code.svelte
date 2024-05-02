<script lang="ts">
	import { Xterm, XtermAddon } from '@battlefieldduck/xterm-svelte';
	import type {
		ITerminalOptions,
		ITerminalInitOnlyOptions,
		Terminal
	} from '@battlefieldduck/xterm-svelte';

	let options: ITerminalOptions & ITerminalInitOnlyOptions = {
		fontFamily: 'Consolas'
	};

	async function onLoad(event: CustomEvent<{ terminal: Terminal }>) {
		console.log('Child component has loaded');
		const terminal = event.detail.terminal;

		// FitAddon Usage
		const fitAddon = new (await XtermAddon.FitAddon()).FitAddon();
		terminal.loadAddon(fitAddon);
		fitAddon.fit();

		terminal.write('Hello World');
	}

	function onData(event: CustomEvent<string>) {
		const data = event.detail;
		console.log('onData()', data);
	}

	function onKey(event: CustomEvent<{ key: string; domEvent: KeyboardEvent }>) {
		const data = event.detail;
		console.log('onKey()', data);
	}
</script>

<Xterm {options} on:load={onLoad} on:data={onData} on:key={onKey} />
