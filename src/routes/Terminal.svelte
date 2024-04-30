<script lang="ts">
	import { Xterm, XtermAddon } from '$lib/index.js';
	import type {
		ITerminalOptions,
		ITerminalInitOnlyOptions,
		Terminal,
		FitAddon
	} from '$lib/index.js';
	import { onMount } from 'svelte';

	let handleResize: () => void;
	let runCommand: () => void;
	let isCommandRunning = false;

	function createResizeHandler(fitAddon: FitAddon) {
		return function handleResize() {
			fitAddon.fit();
		};
	}

	function runCommandHandler(terminal: Terminal) {
		return async function runCommand() {
			isCommandRunning = true;
			terminal.writeln('\r\n\r\nPinging 1.1.1.1 with 32 bytes of data:');
			terminal.writeln('Reply from 1.1.1.1: bytes=32 time=4ms TTL=63');
			await new Promise((resolve) => setTimeout(resolve, 1000));
			terminal.writeln('Reply from 1.1.1.1: bytes=32 time=4ms TTL=63');
			await new Promise((resolve) => setTimeout(resolve, 1000));
			terminal.writeln('Reply from 1.1.1.1: bytes=32 time=4ms TTL=63');
			await new Promise((resolve) => setTimeout(resolve, 1000));
			terminal.writeln('Reply from 1.1.1.1: bytes=32 time=3ms TTL=63');
			terminal.writeln('\nPing statistics for 1.1.1.1:');
			terminal.writeln('    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),');
			terminal.writeln('Approximate round trip times in milli-seconds:');
			terminal.writeln('    Minimum = 3ms, Maximum = 4ms, Average = 3ms\r\n');
			terminal.write('C:\\Users\\Administrator>ping 1.1.1.1');
			isCommandRunning = false;
		};
	}

	onMount(() => {
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	async function onLoad(event: CustomEvent<{ terminal: Terminal }>) {
		const terminal = event.detail.terminal;
		terminal.write('C:\\Users\\Administrator>ping 1.1.1.1');
		runCommand = runCommandHandler(terminal);

		// FitAddon Usage
		const fitAddon = new (await XtermAddon.FitAddon()).FitAddon();
		terminal.loadAddon(fitAddon);
		fitAddon.fit();

		handleResize = createResizeHandler(fitAddon);
		window.addEventListener('resize', handleResize);
	}

	function onKey(event: CustomEvent<{ key: string; domEvent: KeyboardEvent }>) {
		const { domEvent } = event.detail;

		if (domEvent.key == 'Enter' && !isCommandRunning) {
			runCommand();
		}
	}

	let options: ITerminalOptions & ITerminalInitOnlyOptions = {
		theme: {
			background: '#000000'
		},
		fontFamily: 'Consolas',
		cursorBlink: true,
		cursorStyle: 'bar'
	};
</script>

<div
	class="p-1 block border border-gray-200 rounded-lg border-gray-700 shadow"
	style="background-color:{options.theme?.background}"
>
	<Xterm {options} on:load={onLoad} on:key={onKey} />
</div>
