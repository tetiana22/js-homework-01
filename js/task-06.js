const input = document.getElementById('validation-input')
input.addEventListener("blur", (event) => {
    const inputValue = event.target.value;
    const dataLength = event.target.getAttribute("data-length");
  
    if (inputValue.length === Number(dataLength)) {
      event.target.classList.add("valid");
      event.target.classList.remove("invalid");
    } else {
      event.target.classList.add("invalid");
      event.target.classList.remove("valid");
    }
  });