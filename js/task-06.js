const input = document.getElementById('validation-input');

input.addEventListener("blur", (event) => {
  const inputValue = event.target.value.length;
  const dataLength = event.target.getAttribute("data-length");
  
  if (inputValue === parseInt(dataLength)) {
    borderColor(event.target, "valid", "invalid");
  } else {
    borderColor(event.target, "invalid", "valid");
  }
});

function borderColor (element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}