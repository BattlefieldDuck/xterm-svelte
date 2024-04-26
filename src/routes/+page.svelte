<script lang="ts">
	import { Xterm } from '$lib/index.js';
	import type { ITerminalOptions, ITerminalInitOnlyOptions, Terminal } from '@xterm/xterm';

	let options: ITerminalOptions & ITerminalInitOnlyOptions = {};

	function handleLoad({ terminal }: { terminal: Terminal }) {
		console.log('Child component has loaded');
		console.log(terminal);

		terminal.onKey(({ key, domEvent }) => {
			console.log({ key, domEvent });
			terminal.write(key);
		});
	}
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Xterm {options} on:load={(event) => handleLoad(event.detail)} />
