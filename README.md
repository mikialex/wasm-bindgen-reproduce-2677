## steps to reproduce

cargo build --target wasm32-unknown-unknown

wasm-bindgen  --out-dir ./pkg --weak-refs --target no-modules ./target/wasm32-unknown-unknown/debug/demo.wasm 

// start any static server at 9080 port
npx static-server

open http://localhost:9080

and wait a while(maybe 10 seconds)

## demo fix

the fix in https://github.com/rustwasm/wasm-bindgen/pull/2677 simply produce pkg/demo_fix.js, and it checked works

