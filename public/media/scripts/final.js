const pwd = document.getElementById("pwd");
const submit = document.getElementById("btn");

const forbid = (el) => {
  el.classList.add("is-wrong");
  setTimeout(() => {
    el.classList.remove("is-wrong");
  }, 3000);
}

submit.onclick = () => {
  if (pwd.value === "k0term4nn") {
    window.location.href = "https://goo.gl/maps/56DAK8yrH3GLn7pj9";
  } else {
    forbid(submit.parentElement);
  }
};