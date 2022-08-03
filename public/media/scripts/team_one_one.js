const team1 = ["pautoinas", "saiborg", "terminaator", "must peegel", "universaal-universium"];
const team2 = ["pokuism", "glitch", "neo", "dimensioon kaks", "synthwave"];

const pwdField = [...document.getElementsByClassName("pwd")];
const submitBtn = document.getElementsByClassName("submit-btn");

const cluebox = document.getElementById("clue");
let tripwire = false;

const forbid = (el) => {
  el.classList.add("is-wrong");
  setTimeout(() => {
    el.classList.remove("is-wrong");
  }, 3000);
}

for (const btn of submitBtn) {
  const i = parseInt(btn.id.slice(-1)) - 1;

  btn.onclick = e => {
    if (pwdField[i].value === team2[i]) {
      cluebox.classList.remove("is-hidden");
      if (!tripwire) {
        typewriter();
        tripwire = true;
      }
    } else {
      forbid(btn.parentElement);
    }
  };
}

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
