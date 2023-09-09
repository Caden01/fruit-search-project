const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  // let results = [];
  // console.log(str);
  // TODO
  suggestions.innerHTML = "";
  let keys = input.value + str.key;
  // console.log(keys);
  let lowerCaseKeys = keys.toLowerCase();
  let searchFruit = fruit.filter((str) => {
    lowerCaseStr = str.toLowerCase();
    if (lowerCaseStr.includes(lowerCaseKeys)) {
      let regex = new RegExp(keys, "gi");
      let boldLetters = str.replace(regex, "<b>" + keys + "</b>");
      console.log(boldLetters);
      let newLi = document.createElement("li");
      suggestions.append(newLi);
      newLi.append(str);
      newLi.innerHTML = boldLetters;
      return str;
    }
  });
  console.log(searchFruit);

  return searchFruit;
}

function searchHandler(e) {
  // TODO
}

function showSuggestions(results, inputVal) {
  // TODO
}

function useSuggestion(e) {
  // TODO
  input.value = e.target.innerHTML;
}

input.addEventListener("keypress", search);
// input.addEventListener("keydown", (e) => {
//   if (e.key === "Backspace") {
//     console.log(search(input.value));
//   }
//   console.log(input.value);
// });
// input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
input.addEventListener("keypress", showSuggestions);
