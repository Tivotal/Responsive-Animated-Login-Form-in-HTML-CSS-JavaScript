/* Created by Tivotal */

let inputs = document.querySelectorAll(".input");

function addActive() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("active");
}

function removeActive() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("active");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addActive);
  input.addEventListener("blur", removeActive);
});
