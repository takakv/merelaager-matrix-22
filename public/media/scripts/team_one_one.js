const team1 = ["pautoinas", "saiborg", "terminaator", "must peegel", "universaal-universium"];
const team2 = ["pokuism", "glitch", "neo", "dimensioon kaks", "synthwave"];

const pwdField = [...document.getElementsByClassName("pwd")];
const submitBtn = document.getElementsByClassName("submit-btn");

console.log(pwdField);

const forbid = (el) => {
  el.classList.add("is-wrong");
  setTimeout(() => {
    el.classList.remove("is-wrong");
  }, 3000);
}

for (const btn of submitBtn) {
  const i = parseInt(btn.id.slice(-1)) - 1;

  btn.onclick = e => {
    if (pwdField[i].value === team1[i]) {
      console.log(true);
    } else {
      forbid(btn.parentElement);
    }
  };
}
