# xterm-svelte

[![Node.js Build](https://github.com/BattlefieldDuck/xterm-svelte/actions/workflows/node-build.yml/badge.svg)](https://github.com/BattlefieldDuck/xterm-svelte/actions/workflows/node-build.yml)
[![NPM Version](https://img.shields.io/npm/v/%40battlefieldduck%2Fxterm-svelte)](https://www.npmjs.com/package/@battlefieldduck/xterm-svelte)

xterm-svelte is a wrapper for the [xterm.js](https://github.com/xtermjs/xterm.js) library, designed to work seamlessly with SvelteKit. This library allows you to embed a fully functional terminal in your SvelteKit application.

Live Demo: https://xterm-svelte.pages.dev

## Features

- Full integration with SvelteKit.
- Xterm addons is managed in xterm-svelte
- Continuous package updates: xterm-svelte is regularly updated to ensure compatibility with the latest versions of SvelteKit and Xterm.js.

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
Contributions are welcome! Please feel free to submit pull requests or open issues.

![https://github.com/BattlefieldDuck/xterm-svelte/graphs/contributors](https://contrib.rocks/image?repo=BattlefieldDuck/xterm-svelte)

## License
xterm-svelte is licensed under the MIT License. See the `LICENSE` file for more details.

## Stargazers over time
[![Stargazers over time](https://starchart.cc/BattlefieldDuck/xterm-svelte.svg?variant=adaptive)](https://starchart.cc/BattlefieldDuck/xterm-svelte)
