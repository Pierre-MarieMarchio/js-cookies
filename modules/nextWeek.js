export function nextWeek() {
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);

  console.log(nextWeek);

  let day = ("0" + nextWeek).slice(9, 11);
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let year = today.getFullYear();

  document.querySelector("#expDate").value = `${year}-${month}-${day}`;
}

// ça ne marche pas avec un string vide !!!!

// const today = new Date();
// const nextWeek = new Date();
// nextWeek.setDate(nextWeek.getDate() + 7);

// console.log(nextWeek);

// let day = ("" + nextWeek).slice(8, 10);
// let month = ("" + (today.getMonth() + 1));
// let year = today.getFullYear();

// document.querySelector('#expDate').value = `${year}-${month}-${day}`;
