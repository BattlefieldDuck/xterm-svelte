// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	declare var hljs: any;
	declare var FlowbiteInstances: any;
	declare const __APP_VERSION__: string;
}

export {};
