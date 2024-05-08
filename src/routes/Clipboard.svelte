<script lang="ts">
	let copyButton: HTMLElement;
	let defaultIcon: HTMLElement;
	let successIcon: HTMLElement;
	let defaultTooltipMessage: HTMLElement;
	let successTooltipMessage: HTMLElement;

	const onCopyButtonClick = () => {
		showSuccess();
		setTimeout(() => resetToDefault(), 2000);
	};

	const showSuccess = () => {
		defaultIcon.classList.add('hidden');
		successIcon.classList.remove('hidden');
		defaultTooltipMessage.classList.add('hidden');
		successTooltipMessage.classList.remove('hidden');
		const tooltip = FlowbiteInstances.getInstance('Tooltip', copyButton.id);
		tooltip.show();
	};

	const resetToDefault = () => {
		defaultIcon.classList.remove('hidden');
		successIcon.classList.add('hidden');
		defaultTooltipMessage.classList.remove('hidden');
		successTooltipMessage.classList.add('hidden');
		const tooltip = FlowbiteInstances.getInstance('Tooltip', copyButton.id);
		tooltip.hide();
	};
</script>

<div class="mb-10 w-full max-w-[24rem] dark">
	<div class="relative">
		<label for="npm-install-copy-button" class="sr-only">Label</label>
		<input
			id="npm-install-copy-button"
			type="text"
			class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-blue-500 dark:focus:border-blue-500"
			value="npm install @battlefieldduck/xterm-svelte"
			disabled
			readonly
		/>
		<button
			on:click={onCopyButtonClick}
			data-copy-to-clipboard-target="npm-install-copy-button"
			data-tooltip-target="tooltip-copy-npm-install-copy-button"
			class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
		>
			<span bind:this={defaultIcon}>
				<svg
					class="w-3.5 h-3.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 18 20"
				>
					<path
						d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
					/>
				</svg>
			</span>
			<span bind:this={successIcon} class="hidden inline-flex items-center">
				<svg
					class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 16 12"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5.917 5.724 10.5 15 1.5"
					/>
				</svg>
			</span>
		</button>
		<div
			bind:this={copyButton}
			id="tooltip-copy-npm-install-copy-button"
			role="tooltip"
			class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
		>
			<span bind:this={defaultTooltipMessage}>Copy to clipboard</span>
			<span bind:this={successTooltipMessage} class="hidden">Copied!</span>
			<div class="tooltip-arrow" data-popper-arrow></div>
		</div>
	</div>
</div>
