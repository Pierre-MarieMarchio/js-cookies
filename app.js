import { nextWeek } from "./modules/nextWeek.js";
import { btnAction } from "./modules/btnAction.js";

nextWeek();

const show = document.querySelector(".show-list");
const infTxt = document.querySelector(".inf-txt");
const btns = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");
var exist = false;

btnAction();
