const { generateText } = require("./util");
test("should Output name and age", () => {
  const text = generateText("shoaib", 29);
  expect(text).toBe("shoaib (29 years old)");

  const text2 = generateText("Anna", 23);
  expect(text2).toBe("Anna (23 years old)");
});
test("should output data-less text", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
