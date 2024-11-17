<script lang="ts">
	import { Xterm, XtermAddon } from '$lib/index.js';
	import type { ITerminalOptions, ITerminalInitOnlyOptions, Terminal } from '$lib/index.js';

	let terminal: Terminal;
	let handleResize: () => void;
	let isCommandRunning = false;

	async function runCommand() {
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
	}

	async function onLoad() {
		terminal.write('C:\\Users\\Administrator>ping 1.1.1.1');

		// FitAddon Usage
		const fitAddon = new (await XtermAddon.FitAddon()).FitAddon();
		terminal.loadAddon(fitAddon);
		fitAddon.fit();
		handleResize = () => fitAddon.fit();
	}

	function onKey(event: { key: string; domEvent: KeyboardEvent }) {
		if (event.domEvent.key == 'Enter' && !isCommandRunning) {
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

<svelte:window onresize={handleResize} />

<div
	class="p-1 block border border-gray-200 rounded-lg border-gray-700 shadow"
	style="background-color:{options.theme?.background}"
>
	<Xterm bind:terminal {options} {onLoad} {onKey} />
</div>
