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
  // TODO

  let alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let keys;
  if (str.key === "Backspace") {
    suggestions.innerHTML = "";
    let results = input.value.split("");
    results.pop();
    keys = results.join("");
  } else if (!alph.includes(str.key)) {
    return;
  } else {
    suggestions.innerHTML = "";
    keys = input.value + str.key;
  }

  let lowerCaseKeys = keys.toLowerCase();

  let searchFruit = fruit.filter((str) => {
    lowerCaseStr = str.toLowerCase();
    if (lowerCaseStr.includes(lowerCaseKeys)) {
      return str;
    }
  });

  showSuggestions(searchFruit, keys);
  return searchFruit;
}

function searchHandler(e) {
  // TODO
}

function showSuggestions(results, inputVal) {
  // TODO
  for (let i = 0; i < results.length; i++) {
    let boldLetters = results[i];
    let match = boldLetters.match(new RegExp(inputVal, "i"));
    boldLetters = boldLetters.replace(match[0], "<b>" + match[0] + "</b>");
    let newLi = document.createElement("li");
    suggestions.append(newLi);
    newLi.append(boldLetters);
    newLi.innerHTML = boldLetters;
  }
}

function useSuggestion(e) {
  // TODO
  if (e.target.nodeName === "LI") {
    input.value = e.target.innerText;
    suggestions.innerHTML = "";
  } else if (e.target.nodeName === "B") {
    input.value = e.target.parentElement.innerText;
    suggestions.innerHTML = "";
  }
}

input.addEventListener("keydown", search);
suggestions.addEventListener("click", useSuggestion);
