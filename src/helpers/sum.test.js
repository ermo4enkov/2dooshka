test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("three plua three", () => {
  const value = 3 + 3;
  expect(value).toBeGreaterThan(5);
  expect(value).toBe(6);
  expect(value).toEqual(6);
});
