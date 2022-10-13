### WASM

```
// env
cargo install wasm-bindgen-cli
rustup target add wasm32-unknown-unknown --toolchain nightly
```

> cargo +nightly build --target wasm32-unknown-unknown --release

> wasm-bindgen target/wasm32-unknown-unknown/release/comp.wasm --out-dir pkg --target deno


### FFI

```
deno install -Afq -n deno_bindgen https://deno.land/x/deno_bindgen/cli.ts
```

> deno_bindgen --release 