/**
 * The `XtermAddon` class provides static methods to dynamically import various addons for the xterm.js library.
 */
export class XtermAddon {
	/**
	 * Dynamically imports the 'attach' addon from `@xterm/addon-attach`.
	 * @returns A promise that resolves to the 'attach' addon module.
	 */
	static AttachAddon = async () => await import('@xterm/addon-attach');

	/**
	 * Dynamically imports the 'clipboard' addon from `@xterm/addon-clipboard`.
	 * @returns A promise that resolves to the 'clipboard' addon module.
	 */
	static ClipboardAddon = async () => await import('@xterm/addon-clipboard');

	/**
	 * Dynamically imports the 'fit' addon from `@xterm/addon-fit`.
	 * @returns A promise that resolves to the 'fit' addon module.
	 */
	static FitAddon = async () => await import('@xterm/addon-fit');

	/**
	 * Dynamically imports the 'image' addon from `@xterm/addon-image`.
	 * @returns A promise that resolves to the 'image' addon module.
	 */
	static ImageAddon = async () => await import('@xterm/addon-image');

	/**
	 * Dynamically imports the 'ligatures' addon from `@xterm/addon-ligatures`.
	 *
	 * This addon is designed to be used in environments with access to Node.js APIs (such as Electron).
	 *
	 * @returns A promise that resolves to the 'ligatures' addon module.
	 */
	// static LigaturesAddon = async () => {
	//     // @ts-ignore
	//     if (typeof process === 'undefined' || process.versions == null || process.versions.node == null) {
	//         // This is not a Node.js environment
	//         throw new Error('This module can only be imported in a Node.js environment');
	//     }

	//     return await import('@xterm/addon-ligatures');
	// }

	/**
	 * Dynamically imports the 'progress' addon from `@xterm/addon-progress`.
	 * @returns A promise that resolves to the 'progress' addon module.
	 */
	static ProgressAddon = async () => await import('@xterm/addon-progress');

	/**
	 * Dynamically imports the 'search' addon from `@xterm/addon-search`.
	 * @returns A promise that resolves to the 'search' addon module.
	 */
	static SearchAddon = async () => await import('@xterm/addon-search');

	/**
	 * Dynamically imports the 'serialize' addon from `@xterm/addon-serialize`.
	 * @returns A promise that resolves to the 'serialize' addon module.
	 */
	static SerializeAddon = async () => await import('@xterm/addon-serialize');

	// This addon is not yet published to npm
	// https://github.com/xtermjs/xterm.js/tree/master/addons/addon-unicode-graphemes
	// static UnicodeGraphemesAddon = async () => await import('@xterm/addon-unicode-graphemes');

	/**
	 * Dynamically imports the 'unicode11' addon from `@xterm/addon-unicode11`.
	 * @returns A promise that resolves to the 'unicode11' addon module.
	 */
	static Unicode11Addon = async () => await import('@xterm/addon-unicode11');

	/**
	 * Dynamically imports the 'web-links' addon from `@xterm/addon-web-links`.
	 * @returns A promise that resolves to the 'web-links' addon module.
	 */
	static WebLinksAddon = async () => await import('@xterm/addon-web-links');

	/**
	 * Dynamically imports the 'webgl' addon from `@xterm/addon-webgl`.
	 * @returns A promise that resolves to the 'webgl' addon module.
	 */
	static WebglAddon = async () => await import('@xterm/addon-webgl');
}
