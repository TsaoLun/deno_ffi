import { add, fib, fib_iter, op_string_builder } from "../bindings/bindings.ts";
import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
Deno.bench("rs", () => {
  add({ a: 1, b: 3 });
});

function tsAdd(x: { a: number; b: number }): number {
  return x.a + x.b;
}

Deno.bench("ts", () => {
  const x = { a: 1, b: 3 };
  tsAdd(x);
});

function fibTs(n: number): number {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibTs(n - 1) + fib(n - 2);
  }
}

Deno.bench("rsFib", () => {
  fib(30);
});

Deno.bench("tsFib", () => {
  fibTs(30);
});

function fibIter(n: number) {
  let [p, c] = [0, 1];
  for (let i = 0; i < n; i++) {
    const temp = p + c;
    p = c;
    c = temp;
  }
  return p;
}

Deno.test("E", () => {
  assertEquals(fib_iter(40), fibIter(40));
});

Deno.bench("RS_FIB_I", () => {
  fib_iter(40);
});

Deno.bench("TS_FIB_I", () => {
  fibIter(40);
});

const STR = "benchmark";
const VALUES = Array.from({ length: 100000 }, (_) => STR);

Deno.bench("rs_str", () => {
  op_string_builder(STR, { str: VALUES });
});

function jsStrBuilder(pre:string, JsString:{str:string[]}){
  return pre + JsString.str.join("")
}

Deno.test("x", () => {
  assertEquals(op_string_builder("x", { str: ["y", "z"] }), jsStrBuilder("x", { str: ["y", "z"] }));
});

Deno.bench("ts_str", ()=>{
  jsStrBuilder(STR, { str: VALUES })
})