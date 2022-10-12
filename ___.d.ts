/* tslint:disable */
/* eslint-disable */
/**
* @param {WInput} input
* @returns {number}
*/
export function wadd(input: WInput): number;
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
* @param {WJsString} args
* @returns {string}
*/
export function w_op_string_builder(str: string, args: WJsString): string;
/**
*/
export class WInput {
  free(): void;
}
/**
*/
export class WJsString {
  free(): void;
}
