/* tslint:disable */
/* eslint-disable */
/**
* @param {any} input
* @returns {number}
*/
export function wadd(input: any): number;
/**
* @param {number} n
* @returns {number}
*/
export function wfib(n: number): number;
/**
* @param {number} n
* @returns {number}
*/
export function fib_witer(n: number): number;
/**
* @param {string} str
* @param {any} args
* @returns {string}
*/
export function w_op_string_builder(str: string, args: any): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly add: (a: number, b: number) => number;
  readonly fib: (a: number) => number;
  readonly fib_iter: (a: number) => number;
  readonly op_string_builder: (a: number, b: number, c: number, d: number) => number;
  readonly wadd: (a: number) => number;
  readonly wfib: (a: number) => number;
  readonly w_op_string_builder: (a: number, b: number, c: number, d: number) => void;
  readonly fib_witer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
