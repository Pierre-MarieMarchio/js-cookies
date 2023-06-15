import { nextWeek } from "./modules/nextWeek.js";

nextWeek();

const show = document.querySelector(".show");
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
        creatcookie(
          btnObj.cookieName,
          btnObj.cookieValue,
          btnObj.cookieExpDate
        );
      } else if (desc === "show") {
        listeCookie();
      }
    });
  });
}

btnAction();
