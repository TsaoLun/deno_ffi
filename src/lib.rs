use deno_bindgen::deno_bindgen;

#[deno_bindgen]
pub struct Input {
  a: i32,
  b: i32,
}

#[deno_bindgen]
fn add(input: Input) -> i32 {
  input.a + input.b
}

#[deno_bindgen]
fn fib(n: u32) -> u32 {
    if n <= 0 {
        0
    } else if n == 1 {
        1
    } else {
        fib(n - 1) + fib(n - 2)
    }
}

#[deno_bindgen]
fn fib_iter(n: u32) -> u32 {
    let (mut x, mut y) = (0, 1);
    for _ in 0..n {
        let temp = x + y;
        x = y;
        y = temp;
    }
    x
}

#[deno_bindgen]
pub struct JsString {
    str: Vec<String>
}

#[deno_bindgen]
fn op_string_builder(str: &str, args: JsString) -> String {
    str.to_owned() + &args.str.join("")
}