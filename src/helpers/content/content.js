export const extractContent = (value) => {
  var span = document.createElement("span");
  span.innerHTML = value;
  return span.textContent || span.innerText;
};
