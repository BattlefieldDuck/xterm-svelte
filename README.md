# xterm-svelte

xterm-svelte is a wrapper for the Xterm.js library, designed to work seamlessly with SvelteKit. This library allows you to embed a fully functional terminal in your SvelteKit application.

## Features

- Full integration with SvelteKit.
- Xterm addons is managed in xterm-svelte
- Continuous package updates: xterm-svelte is regularly updated to ensure compatibility with the latest versions of SvelteKit and Xterm.js.

## Installation

To install Xterm-Svelte, run the following command in your project directory:

```bash
npm install xterm-svelte
```

## Usage

Here's a basic example of how to use xterm-svelte in your SvelteKit application:

```svelte
<script lang="ts">
	import { Xterm } from 'xterm-svelte';
	import type { ITerminalOptions, ITerminalInitOnlyOptions, Terminal } from 'xterm-svelte';

	let options: ITerminalOptions & ITerminalInitOnlyOptions = {};

	async function onLoad(event: CustomEvent<{ terminal: Terminal }>) {
		console.log('Child component has loaded');
		const terminal = event.detail.terminal;

		// FitAddon Usage
		const { FitAddon } = await XtermAddon.FitAddon();
		const fitAddon = new FitAddon();
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
```

## Contributing

We welcome contributions from the community. Please read our contributing guide for more information.

## License

This project is licensed under the MIT License.
