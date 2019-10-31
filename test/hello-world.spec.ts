import { expect } from "chai";
import "mocha";

/*
import { hello } from "../src/hello-world";

describe("Hello function", () => {
  it("should return hello world", () => {
    const result = hello();
    expect(result).to.equal("Hello world!");
  });
});
*/

import Hello from "../src/hello-world";

describe("sayHello function", () => {
  it("should return hello", () => {
    const hello = new Hello();
    expect(hello.sayHello()).to.equal("Hello");
  });
});
