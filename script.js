//your JS code here. If required.
const modal = document.querySelector(".modal")
document.getElementById("openModal").addEventListener("click", () => {
	modal.style.display = "block"
})
document.querySelector(".close-modal").addEventListener("click", () => {
	modal.style.display = "none"
})

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
})