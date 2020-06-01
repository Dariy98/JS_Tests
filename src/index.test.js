import {
  getUserById,
  getYoungestUser,
  getUsersGender,
  getBalanceUsers,
  getUniqueFavoriteFruits,
  mapFruitsWithCount,
  mapFruitsByVowels
} from "./index";
import users from "./users";
import fruits from "./fruits";
import vowels from "./vowels";

const mockUsers = users.slice(0, 2);

describe("user", () => {
  test("found user", () => {
    expect(getUserById("5a58d21ccb3c3f594dab0afc")).toEqual(mockUsers[0]);
  });

  test("age of youngest user", () => {
    expect(getYoungestUser()).toBe(21);
  });

  test("object with quantity of gender", () => {
    expect(getUsersGender()).toEqual({ male: 12, female: 8 });
  });

  test("return is object", () => {
    expect(getUsersGender()).toBeInstanceOf(Object);
  });

  test("new object has a property", () => {
    expect(getUsersGender()).toHaveProperty("female");
  });

  test("get all baance of users", () => {
    expect(getBalanceUsers()).toEqual("$54,514.59");
  });

  test("result is string", () => {
    expect(getBalanceUsers()).toEqual(expect.any(String));
  });
});

describe("fruits", () => {
  test("return array of unique fruits", () => {
    const result = ["apple", "strawberry", "banana"];
    expect(getUniqueFavoriteFruits(users)).toEqual(result);
  });

  test("return array of count fruits", () => {
    expect(mapFruitsWithCount(fruits)).toEqual([
      "1. ban",
      "2. app",
      "3. avo",
      "4. kiv"
    ]);
  });

  test("return array fruits with the first vowels", () => {
    expect(mapFruitsByVowels(fruits, vowels)).toEqual(["apple", "avocado"]);
  });

  test("return result is array", () => {
    expect(mapFruitsByVowels(fruits, vowels)).toBeInstanceOf(Array);
  });
});
