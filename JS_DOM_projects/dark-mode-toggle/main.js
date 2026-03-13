const toggleBtn = document.getElementById("toggle-btn");
const header = document.getElementById("header");
toggleBtn.addEventListener("click", () => {
	const mode = document.body.classList.toggle("dark-mode");

	
	if (mode) {
		toggleBtn.textContent = "Toggle Light Mode";
        header.textContent = "Dark Mode Toggled";
	} else {
		toggleBtn.textContent = "Toggle Dark Mode";
        header.textContent = "Light Mode Toggled";
	}
});
