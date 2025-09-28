# Xterm Svelte

<img align="right" width="100" height="100" src="https://github.com/BattlefieldDuck/xterm-svelte/assets/29337428/e1055940-ae66-48b5-9a1f-1965949b5757">

[![Node.js Build](https://github.com/BattlefieldDuck/xterm-svelte/actions/workflows/node-build.yml/badge.svg)](https://github.com/BattlefieldDuck/xterm-svelte/actions/workflows/node-build.yml)
![NPM Type Definitions](https://img.shields.io/npm/types/%40battlefieldduck%2Fxterm-svelte)
[![NPM Version](https://img.shields.io/npm/v/%40battlefieldduck%2Fxterm-svelte)](https://www.npmjs.com/package/@battlefieldduck/xterm-svelte)
![NPM Downloads](https://img.shields.io/npm/dw/%40battlefieldduck%2Fxterm-svelte)
![NPM Downloads](https://img.shields.io/npm/d18m/%40battlefieldduck%2Fxterm-svelte)
![NPM License](https://img.shields.io/npm/l/%40battlefieldduck%2Fxterm-svelte)

xterm-svelte is a wrapper for the [xterm.js](https://github.com/xtermjs/xterm.js) library, designed to work seamlessly with SvelteKit. This library allows you to embed a fully functional terminal in your SvelteKit application.

Check it out: https://xterm-svelte.pages.dev

## Version Compatibility

| Version | Svelte Version | Branch                                                                    | Demonstration                          |
| ------- | -------------- | ------------------------------------------------------------------------- | -------------------------------------- |
| 2.x.x   | Svelte 5       | [`main`](https://github.com/BattlefieldDuck/xterm-svelte)                 | https://xterm-svelte.pages.dev         |
| 1.x.x   | Svelte 4       | [`svelte4`](https://github.com/BattlefieldDuck/xterm-svelte/tree/svelte4) | https://svelte4.xterm-svelte.pages.dev |

For details on migrating from version 1.x.x to 2.x.x, refer to the [Migration Guide](https://github.com/BattlefieldDuck/xterm-svelte/releases/tag/2.0.0).

## Features

- **Full integration with SvelteKit**

  Xterm-Svelte is designed to work seamlessly with SvelteKit, allowing you to easily incorporate terminal functionality into your SvelteKit projects.

- **Xterm addons management**

  Xterm addons are managed within Xterm-Svelte, providing a unified and consistent interface for working with Xterm and its addons.

- **Continuous package updates**

  Xterm-Svelte is regularly updated to ensure compatibility with the latest versions of SvelteKit and Xterm.js. This means you can always use the latest features and improvements from these libraries in your projects.

## Installation

To install Xterm-Svelte, run the following command in your project directory:

```bash
npm install @battlefieldduck/xterm-svelte
```

## Usage

Here's a basic example of how to use xterm-svelte in your SvelteKit application:

```svelte
<script lang="ts">
	import { Xterm, XtermAddon } from '@battlefieldduck/xterm-svelte';
	import type {
		ITerminalOptions,
		ITerminalInitOnlyOptions,
		Terminal
	} from '@battlefieldduck/xterm-svelte';

	let terminal = $state<Terminal>();

	const options: ITerminalOptions & ITerminalInitOnlyOptions = {
		fontFamily: 'Consolas'
	};

	async function onLoad() {
		console.log('Child component has loaded');

		// FitAddon Usage
		const fitAddon = new (await XtermAddon.FitAddon()).FitAddon();
		terminal?.loadAddon(fitAddon);
		fitAddon.fit();

		terminal?.write('Hello World');
	}

	function onData(data: string) {
		console.log('onData()', data);
	}

	function onKey(data: { key: string; domEvent: KeyboardEvent }) {
		console.log('onKey()', data);
	}
</script>

<Xterm bind:terminal {options} {onLoad} {onData} {onKey} />
```

## FAQ

### When should I use `onLoad()`?

The `onLoad()` function fires when the xterm terminal is first initialized. You can use this function to perform actions such as initializing xterm addons.

## Real-world uses
- [Bitor](https://github.com/bitorscanner/Bitor): Bitor Scanning Software
- [Asm editor](https://github.com/Specy/asm-editor): A modern webapp to write, run and learn M68K, MIPS, RISC-V, X86 assembly
- [Sylve](https://github.com/AlchemillaHQ/Sylve): Lightweight GUI for managing Bhyve, Jails, ZFS, networking, and more on FreeBSD
- [And much more...](https://github.com/BattlefieldDuck/xterm-svelte/network/dependents)

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

![https://github.com/BattlefieldDuck/xterm-svelte/graphs/contributors](https://contrib.rocks/image?repo=BattlefieldDuck/xterm-svelte)

## License

xterm-svelte is licensed under the MIT License. See the `LICENSE` file for more details.

## Stargazers over time

[![Stargazers over time](https://starchart.cc/BattlefieldDuck/xterm-svelte.svg?variant=adaptive)](https://starchart.cc/BattlefieldDuck/xterm-svelte)
