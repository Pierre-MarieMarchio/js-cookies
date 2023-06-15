const show = document.querySelector(".show-list");
const infTxt = document.querySelector(".inf-txt");
const btns = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");
var exist = false;

export function btnAction() {
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
  //   split transofm une chainne de caractere en tableaux
  let cookies = document.cookie.split(";");

  //   réinitialise inf-txt

  infTxt.innerText = "";

  //   on verifie si le cookie existe déja

  cookies.forEach((cookie) => {
    cookie = cookie.trim().split("=");

    if (cookie[0] === encodeURIComponent(name)) {
      exist = true;
    }
  });

  if (exist === true) {
    infTxt.innerText = "un cookie avec ce nom existe";
    exist = false;
    return;
  }

  //   on crée le cookie

  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )};expires=${expDate.toUTCString()}`;

  //   on affiche que le cookie a bien été créé

  inf.innerText = `Cookie ${name} created`;
  show.appendChild(inf);
  setTimeout(() => {
    inf.remove();
  }, 1500);
}
