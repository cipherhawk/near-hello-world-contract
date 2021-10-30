import { hello_world } from '..';
describe("hello_world", () => {
  it("should return hello world",() => {
    expect(hello_world()).toStrictEqual("hello world");
  })
});