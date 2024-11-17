<script lang="ts">
	import Terminal from './Terminal.svelte';
	import Clipboard from './Clipboard.svelte';
	import CodeRaw from './Code.svelte?raw';
	import { onMount } from 'svelte';

	onMount(() => {
		hljs.highlightAll();
	});
</script>

<svelte:head>
	<title>Xterm Svelte</title>
</svelte:head>

<div class="container mx-auto px-2 py-12">
	<div class="text-center py-12">
		<h1
			class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
		>
			Welcome to
			<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
				Xterm Svelte
			</span>
		</h1>

		<div class="mb-6 flex items-center justify-center gap-2 flex-wrap">
			<a href="https://github.com/BattlefieldDuck/xterm-svelte/actions/workflows/node-build.yml">
				<img
					src="https://github.com/BattlefieldDuck/xterm-svelte/actions/workflows/node-build.yml/badge.svg"
					alt="Node.js Build"
				/>
			</a>
			<img
				src="https://img.shields.io/npm/types/%40battlefieldduck%2Fxterm-svelte"
				alt="NPM Type Definitions"
			/>
			<a href="https://www.npmjs.com/package/@battlefieldduck/xterm-svelte">
				<img
					src="https://img.shields.io/npm/v/%40battlefieldduck%2Fxterm-svelte"
					alt="NPM Version"
				/>
			</a>
			<img
				src="https://img.shields.io/npm/dw/%40battlefieldduck%2Fxterm-svelte"
				alt="NPM Downloads"
			/>
			<img
				src="https://img.shields.io/npm/d18m/%40battlefieldduck%2Fxterm-svelte"
				alt="NPM Downloads"
			/>
			<img src="https://img.shields.io/npm/l/%40battlefieldduck%2Fxterm-svelte" alt="NPM License" />
		</div>

		<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
			A SvelteKit wrapper for
			<a
				href="https://xtermjs.org/"
				class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Xterm.js</a
			>
			, enabling terminal embedding in SvelteKit apps, managing Xterm addons, and providing seamless
			updates with the latest SvelteKit and Xterm.js versions.
		</p>
	</div>

	<div
		class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
		role="alert"
	>
		<svg
			class="flex-shrink-0 inline w-4 h-4 me-3"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
			/>
		</svg>
		<span class="sr-only">Info</span>
		<div>
			Below is a simulated demo of the Windows Command Prompt, powered by xterm.js and integrated
			with xterm-svelte. Feel free to interact with the terminal - try pressing ‘Enter’ to see it in
			action!
		</div>
	</div>

	<Terminal />

	<div class="py-12">
		<h2 class="mb-4 text-4xl font-bold dark:text-white">Getting Started</h2>
		<p class="mb-3 text-gray-500 dark:text-gray-400">
			To install xterm-svelte, use the following npm command:
		</p>

		<Clipboard />

		<p class="mb-3 text-gray-500 dark:text-gray-400">
			Once installed, you can easily integrate xterm-svelte into your project. Here's a sample code
			snippet to get you started:
		</p>

		<pre class="mb-4"><code class="svelte rounded-lg shadow">{CodeRaw}</code></pre>

		<p class="mb-3 text-gray-500 dark:text-gray-400">
			For more details and advanced usage, please refer to the xterm-svelte <a
				href="https://github.com/BattlefieldDuck/xterm-svelte"
				class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Github README.md</a
			>. Happy coding!
		</p>
	</div>
</div>
