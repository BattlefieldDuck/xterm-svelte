# xterm-svelte

<img align="right" width="100" height="100" src="https://github.com/BattlefieldDuck/xterm-svelte/assets/29337428/e1055940-ae66-48b5-9a1f-1965949b5757">

[![Node.js Build](https://github.com/BattlefieldDuck/xterm-svelte/actions/workflows/node-build.yml/badge.svg)](https://github.com/BattlefieldDuck/xterm-svelte/actions/workflows/node-build.yml)
[![NPM Version](https://img.shields.io/npm/v/%40battlefieldduck%2Fxterm-svelte)](https://www.npmjs.com/package/@battlefieldduck/xterm-svelte)
![NPM Downloads](https://img.shields.io/npm/dw/%40battlefieldduck%2Fxterm-svelte)

xterm-svelte is a wrapper for the [xterm.js](https://github.com/xtermjs/xterm.js) library, designed to work seamlessly with SvelteKit. This library allows you to embed a fully functional terminal in your SvelteKit application.

Check it out: https://xterm-svelte.pages.dev

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
    import { Xterm } from '@battlefieldduck/xterm-svelte';
    import type { ITerminalOptions, ITerminalInitOnlyOptions, Terminal } from '@battlefieldduck/xterm-svelte';

    let options: ITerminalOptions & ITerminalInitOnlyOptions = {};

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
```

## Contributing
Contributions are welcome! Please feel free to submit pull requests or open issues.

![https://github.com/BattlefieldDuck/xterm-svelte/graphs/contributors](https://contrib.rocks/image?repo=BattlefieldDuck/xterm-svelte)

## License
xterm-svelte is licensed under the MIT License. See the `LICENSE` file for more details.

## Stargazers over time
[![Stargazers over time](https://starchart.cc/BattlefieldDuck/xterm-svelte.svg?variant=adaptive)](https://starchart.cc/BattlefieldDuck/xterm-svelte)
