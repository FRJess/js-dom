console.log(document.querySelector(".red").innerHTML);

console.log(document.querySelector("#lorem1").innerHTML);

const elementLorem1 = document.querySelector("#lorem1");

console.log(elementLorem1.classList);
elementLorem1.classList.add("upper");

elementLorem1.classList.remove("italic");

console.log(elementLorem1.className);

//seleziono il primo container
const primoContainer = document.querySelector(".container");
//lo nascondo aggiungendo la classe hide (commento per non applicarlo)
// primoContainer.classList.add("hide");

const terzoContainer = document.querySelector(".terzo")

terzoContainer.style.cssText = "background-color: pink; font-size: 0.8rem; padding: 1rem; border: 1px dotted black";
console.log("terzoContainer", terzoContainer.classList)