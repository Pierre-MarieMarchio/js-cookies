import { nextWeek } from "./modules/nextWeek.js";

nextWeek();

const show = document.querySelector(".show-list");
const infTxt = document.querySelector(".inf-txt");
const btns = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");

function btnAction() {
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let btnObj = {};
      let desc = e.target.getAttribute("data-cookie");

      inputs.forEach((input) => {
        let attrName = input.getAttribute("name");
        let attrValue =
          attrName !== "expDate" ? input.value : input.valueAsDate;
        btnObj[attrName] = attrValue;
      });

      if (desc === "create") {
        console.log(btnObj);
        creatcookie(btnObj.name, btnObj.value, btnObj.expDate);
      } else if (desc === "show") {
        listeCookie();
      }
    });
  });
}

function creatcookie(name, value, expDate) {
  let inf = document.createElement("li");

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )};expires=${expDate.toUTCString()}`;

  inf.innerText = `Cookie ${name} created`;
  show.appendChild(inf);
  setTimeout(() => {
    inf.remove();
  }, 1500);
}

btnAction();
