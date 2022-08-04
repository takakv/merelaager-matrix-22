const team1 = ["pautoinas", "saiborg", "terminaator", "must peegel", "universaal-universium"];
const team2 = ["pokuism", "glitch", "neo", "dimensioon kaks", "synthwave"];

const team_id = parseInt(document.body.id);

const team = team_id === 1 ? team2 : team1;

const pwdField = document.getElementById("pwd");
const submitBtn = [...document.getElementsByClassName("submit-btn")][0];

const backBtn = document.getElementById("back-btn");
const frontBtn = document.getElementById("front-btn");

const btnId = parseInt(submitBtn.id);

if (btnId === 1) backBtn.classList.add("is-hidden");
else backBtn.href = `${backBtn.href}${btnId - 1}`;

if (btnId === 5) frontBtn.href = `/t${team_id}/final`;
else frontBtn.href = `${frontBtn.href}${btnId + 1}`;

const cluebox = document.getElementById("clue");
let tripwire = false;

const forbid = (el) => {
  el.classList.add("is-wrong");
  setTimeout(() => {
    el.classList.remove("is-wrong");
  }, 3000);
}

const i = parseInt(submitBtn.id) - 1;

submitBtn.onclick = () => {
  if (pwdField.value === team[i]) {
    cluebox.classList.remove("is-hidden");
    if (!tripwire) {
      typewriter();
      tripwire = true;
    }
  } else {
    forbid(submitBtn.parentElement);
  }
};

// set up text to print, each item in array is new line
let aText = new Array(cluebox.innerText);
const iSpeed = 100; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
const iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents variable
let iRow; // initialise current row

const typewriter = () => {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);

  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }

  cluebox.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

  if (iTextPos++ === iArrLength) {
    iTextPos = 0;
    iIndex++;

    if (iIndex !== aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout(typewriter, 500);
    }
  } else {
    setTimeout(typewriter, iSpeed);
  }
}
