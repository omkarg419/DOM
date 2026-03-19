const inputText = document.getElementById("itemInput");
const addButton = document.getElementById("addButton");
const list = document.getElementById("List");

addButton.addEventListener("click", () => {
	if (inputText.value === "") {
		alert("enter the input first");
		return;
	}

	const li = document.createElement("li");
	li.textContent = inputText.value;
	list.appendChild(li);

	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "delete";
	deleteBtn.classList.add("delete");
	li.appendChild(deleteBtn);

	deleteBtn.addEventListener("click", () => {
		li.remove();
	});

	li.addEventListener("dblclick", () => {
		const oldText = li.firstChild.textContent;

		const input = document.createElement("input");
		input.type = "text";
		input.value = oldText;

		li.firstChild.replaceWith(input);

		input.focus();

		// ENTER PRESS
		input.addEventListener("keypress", (e) => {
			if (e.key === "Enter") {
				saveEdit();
			}
		});

		// CLICK OUTSIDE
		input.addEventListener("blur", saveEdit);

		function saveEdit() {
			const span = document.createElement("span");
			
			span.textContent = input.value;

			input.replaceWith(span);
		}
	});

	inputText.value = "";
});
