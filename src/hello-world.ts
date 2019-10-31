//export const hello = () => "Hello world!";

export default class Hello {
  constructor() {
    console.log("Hello class");
  }

  public sayHello(): string {
    return "Hello";
  }
}
