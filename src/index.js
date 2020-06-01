import users from "./users";
import fruits from "./fruits";
import vowels from "./vowels";

// ------------------------------------------------------------------------------------------------
/**
 * @param {String} userId   ID пользователя
 *
 * @return {Object} объект пользователя
 */
export function getUserById(userId) {
  const objUser = users.find(user => user._id === userId);
  return objUser;
}
// console.log(getUserById("5a58d21c927e4d55b829b301"));
//-----------------------------------------------------
export function getAverangeUsers() {
  const a = users.reduce((total, user) => {
    return total + user.age;
  }, 0);
  console.log(a / users.length);
}
// getAverangeUsers();
//-----------------------------------------------------------
export function getActiveUsers() {
  const activeUsers = users.filter(user => {
    if (user.isActive === true) return true;
  });
  console.log(activeUsers);
}
// getActiveUsers();
//-----------------------------------------------------------
export function getUsersGender() {
  const male = users.filter(user => {
    if (user.gender === "male") return true;
  });
  const female = users.filter(user => {
    if (user.gender === "female") return true;
  });
  return { male: male.length, female: female.length };
}
// console.log(getUsersGender());
//--------------------------------------------------------
export function getOldestUser() {
  let a = 0;
  users.forEach(user => {
    if (a < user.age) return (a = user.age);
  });
  return a;
}
// console.log(getOldestUser());
//--------------------------------------------------------
export function getYoungestUser() {
  let b = 999;
  users.forEach(user => {
    if (b > user.age) return (b = user.age);
  });
  return b;
}
// console.log(getYoungestUser());
//--------------------------------------------------------
export function sortUsersByAge(order) {
  if (order === "asc") {
    users.sort((a, b) => a.age - b.age);
  }
  if (order === "desc") {
    users.sort((a, b) => b.age - a.age);
  }
  console.log(users);
}
// sortUsersByAge("asc");
//--------------------------------------------------------
export function getFavoriteFruit(fruitName) {
  const a = users.filter(user => {
    if (user.favoriteFruit === fruitName) return true;
  });
  return a;
}
// console.log(getFavoriteFruit("banana"));
//--------------------------------------------------------
export function mapUsersByFields(fields) {
  let obj = {};
  const usersFields = users.map(user => {
    fields.forEach(field => (obj[field] = user[field]));
    return obj;
  });
  console.log(usersFields);
}
// mapUsersByFields(["name", "email", "phone", "balance"]);
//--------------------------------------------------------
export function getUsersByTags(tags) {
  const arr = users.map(user => {
    tags.forEach(tag => {
      user.tags.filter(a => {
        if (a === tag) return true;
      });
    });
    return user;
  });
  console.log(arr);
}
// getUsersByTags(["duis", "nulla"]);
//--------------------------------------------------------
export function getBalanceUsers() {
  const a = users.map(user => {
    user.balance = user.balance.replace(/\D/g, "");
    return parseInt(user.balance);
  });
  const allBalance = a.reduce((total, money) => {
    return total + money;
  });
  let allBalance2 = String(allBalance);
  if (allBalance2.length === 7) {
    let B = `$${allBalance2.slice(0, 2)},${allBalance2.slice(
      2,
      5
    )}.${allBalance2.slice(5)}`;
    return B;
  } else if (allBalance2.length === 6) {
    let B2 = `$${allBalance2.slice(0, 1)},${allBalance2.slice(
      1,
      4
    )}.${allBalance2.slice(4)}`;
    return B2;
  } else if (allBalance2.length === 5) {
    let B3 = `$${allBalance2.slice(0, 3)}.${allBalance2.slice(3)}`;
    return B3;
  }
}
// console.log(getBalanceUsers());
//------------------------------------------------------------
export function getLocationByUserId(userId) {
  users.forEach(user => {
    if (userId === user._id)
      console.log({ lat: user.latitude, long: user.longitude });
  });
}
// getLocationByUserId("5a58d21c52dc0461eb0e45f6");
//------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 *
 * @return {Array} orderListFruits   Вывести пронумерованных фруктов ['1. banan', '2. apple' ...]
 */
export function mapOrderList(fruits) {
  const newFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
  console.log(newFruits);
}
// mapOrderList(["banana", "apricot", "pineapple", "pear", "lime"]);
//------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 *
 * @return {Array} transformListFruits
 * Вывести список пронумерованных фруктов, только 3 символа каждого фрукта ['1. ban', '2. app' ...]
 */
export function mapFruitsWithCount(fruits) {
  const countFruits = fruits.map(
    (item, index) => `${index + 1}. ` + item.substring(0, 3)
  );
  return countFruits;
}
// console.log(mapFruitsWithCount(fruits));
//------------------------------------------------------------
/**
 * @param {Array} fruits   Массив фруктов
 * @param {Array} vowels   Массив гласных
 *
 * @return {Array} fruitsListByVowels
 * Вывести список фруктов, у которых первая буква гласная ['apple', 'avocado' ...]
 */
export function mapFruitsByVowels(fruits, vowels) {
  return fruits.filter(fruit => vowels.includes(fruit[0]));
}
// console.log(mapFruitsByVowels(fruits, vowels));
//------------------------------------------------------------
/**
 * @param {Array} users    Массив пользователей
 *
 * @return {Array} companyList       Список компаний
 */
export function getCompanyList(users) {
  return users.map(item => item.company);
}
// console.log(getCompanyList(users));
//------------------------------------------------------------
/**
 * @param {Array} users    Массив пользователей
 *
 * @return {Array} uniqueFavoriteFruits       Список фруктов
 */
export function getUniqueFavoriteFruits(users) {
  return users.reduce((uniqueFruits, user) => {
    const favoriteFruit = user.favoriteFruit;
    if (!uniqueFruits.includes(favoriteFruit)) {
      uniqueFruits.push(favoriteFruit);
    }
    return uniqueFruits;
  }, []);
}
// console.log(getUniqueFavoriteFruits(users));
//------------------------------------------------------------
/**
 * @param {String|Number|Boolean} field    свойство пользователя (примитив) - дополнительно можно сделать и по обьект/массивам
 *
 * @return {Array} uniqueFavoriteFruits      Сортированный список пользователей по значению свойства
 */
export function sortUsersByField(field) {
  const usersSelection = users.map(user => {
    return user[field];
  });
  usersSelection.forEach(user => {
    if (typeof user === "number" || typeof user === "boolean") {
      usersSelection.sort((a, b) => b - a);
    }
    if (typeof user === "string") {
      usersSelection.sort();
    }
  });
  console.log(usersSelection);
}
// sortUsersByField("name");
