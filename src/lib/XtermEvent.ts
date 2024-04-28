import type { Terminal } from "@xterm/xterm";

export interface XtermEvent {
    /**
     * Adds an event listener for when the terminal is loaded.
     * @returns an `IDisposable` to stop listening.
     */
    load: { terminal: Terminal }

    /**
     * Adds an event listener for when the bell is triggered.
     * @returns an `IDisposable` to stop listening.
     */
    bell: void

    /**
     * Adds an event listener for when a binary event fires. This is used to
     * enable non UTF-8 conformant binary messages to be sent to the backend.
     * Currently this is only used for a certain type of mouse reports that
     * happen to be not UTF-8 compatible.
     * The event value is a JS string, pass it to the underlying pty as
     * binary data, e.g. `pty.write(Buffer.from(data, 'binary'))`.
     * @returns an `IDisposable` to stop listening.
     */
    binary: string

    /**
     * Adds an event listener for the cursor moves.
     * @returns an `IDisposable` to stop listening.
     */
    cursormove: void

    /**
     * Adds an event listener for when a data event fires. This happens for
     * example when the user types or pastes into the terminal. The event value
     * is whatever `string` results, in a typical setup, this should be passed
     * on to the backing pty.
     * @returns an `IDisposable` to stop listening.
     */
    data: string

    /**
     * Adds an event listener for when a key is pressed. The event value
     * contains the string that will be sent in the data event as well as the
     * DOM event that triggered it.
     * @returns an `IDisposable` to stop listening.
     */
    key: { key: string, domEvent: KeyboardEvent }

    /**
     * Adds an event listener for when a line feed is added.
     * @returns an `IDisposable` to stop listening.
     */
    linefeed: void

    /**
     * Adds an event listener for when rows are rendered. The event value
     * contains the start row and end rows of the rendered area (ranges from `0`
     * to `Terminal.rows - 1`).
     * @returns an `IDisposable` to stop listening.
     */
    render: { start: number, end: number }

    /**
     * Adds an event listener for when data has been parsed by the terminal,
     * after {@link write} is called. This event is useful to listen for any
     * changes in the buffer.
     *
     * This fires at most once per frame, after data parsing completes. Note
     * that this can fire when there are still writes pending if there is a lot
     * of data.
     */
    writeparsed: void

    /**
     * Adds an event listener for when the terminal is resized. The event value
     * contains the new size.
     * @returns an `IDisposable` to stop listening.
     */
    resize: { cols: number, rows: number }

    /**
     * Adds an event listener for when a scroll occurs. The event value is the
     * new position of the viewport.
     * @returns an `IDisposable` to stop listening.
     */
    scroll: number

    /**
     * Adds an event listener for when a selection change occurs.
     * @returns an `IDisposable` to stop listening.
     */
    selectionchange: void

    /**
     * Adds an event listener for when an OSC 0 or OSC 2 title change occurs.
     * The event value is the new title.
     * @returns an `IDisposable` to stop listening.
     */
    titlechange: string
}
