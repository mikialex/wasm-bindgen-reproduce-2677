use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Foo {
    pub a: f32,
}

#[wasm_bindgen]
impl Foo {
    pub fn new() -> Self {
        Self { a: 0. }
    }
}

#[wasm_bindgen]
pub fn test(_a: Foo) {
    // do nothing
}
