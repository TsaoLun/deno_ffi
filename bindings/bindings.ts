// Auto-generated with deno_bindgen
import { CachePolicy, prepare } from "https://deno.land/x/plug@0.5.2/plug.ts"

function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v
  return new TextEncoder().encode(v)
}

function decode(v: Uint8Array): string {
  return new TextDecoder().decode(v)
}

function readPointer(v: any): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v as bigint)
  const lengthBe = new Uint8Array(4)
  const view = new DataView(lengthBe.buffer)
  ptr.copyInto(lengthBe, 0)
  const buf = new Uint8Array(view.getUint32(0))
  ptr.copyInto(buf, 4)
  return buf
}

const url = new URL("../target/debug", import.meta.url)
let uri = url.toString()
if (!uri.endsWith("/")) uri += "/"

let darwin: string | { aarch64: string; x86_64: string } = uri + "lib___.dylib"

if (url.protocol !== "file:") {
  // Assume that remote assets follow naming scheme
  // for each macOS artifact.
  darwin = {
    aarch64: uri + "lib____arm64.dylib",
    x86_64: uri + "lib___.dylib",
  }
}

const opts = {
  name: "___",
  urls: {
    darwin,
    windows: uri + "___.dll",
    linux: uri + "lib___.so",
  },
  policy: CachePolicy.NONE,
}
const _lib = await prepare(opts, {
  add: { parameters: ["pointer", "usize"], result: "i32", nonblocking: false },
  fib: { parameters: ["u32"], result: "u32", nonblocking: false },
  fib_iter: { parameters: ["u32"], result: "u32", nonblocking: false },
})
export type Input = {
  a: number
  b: number
}
export function add(a0: Input) {
  const a0_buf = encode(JSON.stringify(a0))
  const a0_ptr = Deno.UnsafePointer.of(a0_buf)
  let rawResult = _lib.symbols.add(a0_ptr, a0_buf.byteLength)
  const result = rawResult
  return result
}
export function fib(a0: number) {
  let rawResult = _lib.symbols.fib(a0)
  const result = rawResult
  return result
}
export function fib_iter(a0: number) {
  let rawResult = _lib.symbols.fib_iter(a0)
  const result = rawResult
  return result
}
