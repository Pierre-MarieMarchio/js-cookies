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
        createcookie(btnObj.name, btnObj.value, btnObj.expDate);
      } else if (desc === "show") {
        listeCookie();
      }
    });
  });
}

function createcookie(name, value, expDate) {
  let inf = document.createElement("li");
  //   split transofm une chainne de caractere en tableaux
  let cookies = document.cookie.split(";");

  //   réinitialise inf-txt

  infTxt.innerText = "";
  show.innerHTML = "";
  show.childNodes.forEach((child) => {
    child.remove();
  });

  //   on verifie si le cookie existe déja

  cookies.forEach((cookie) => {
    cookie = cookie.trim().split("=");

    if (cookie[0] === encodeURIComponent(name)) {
      exist = true;
    }
  });

  if (exist === true) {
    infTxt.innerText = "a cookie with this name exist";
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

function listeCookie() {
  let cookies = document.cookie.split(";");
  show.innerHTML = "";
  show.childNodes.forEach((child) => {
    child.remove();
  });

  if (cookies.join() === "") {
    infTxt.innerText = "any cookie exist";
    return;
  }

  cookies.forEach((cookie) => {
    let item = document.createElement("li");

    infTxt.innerText = "click on the cookie to see dellet it";
    cookie = cookie.trim().split("=");

    item.innerText = `Name :${decodeURIComponent(
      cookie[0]
    )} Value : ${decodeURIComponent(cookie[1])}`;

    show.appendChild(item);

    item.addEventListener("click", (e) => {
      document.cookie = `${cookie[0]}=; expires=${new Date(0)}`;
      item.innerText = `Cookie ${cookie[0]} deleted`;

      setTimeout(() => {
        item.remove();
      }, 1000);
    });
  });
}
