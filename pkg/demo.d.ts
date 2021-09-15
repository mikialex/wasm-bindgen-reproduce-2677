declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	* @param {Foo} _a
	*/
	export function test(_a: Foo): void;
	/**
	*/
	export class Foo {
	  free(): void;
	/**
	* @returns {Foo}
	*/
	  static new(): Foo;
	/**
	*/
	  a: number;
	}
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_foo_free: (a: number) => void;
  readonly __wbg_get_foo_a: (a: number) => number;
  readonly __wbg_set_foo_a: (a: number, b: number) => void;
  readonly foo_new: () => number;
  readonly test: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
