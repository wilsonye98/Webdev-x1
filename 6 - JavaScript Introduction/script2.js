var todoInput = document.querySelector("input");
var lst = document.querySelector("ul");
var btn = document.querySelector("button");

function createElementWithText(txt) {
	var element = document.createElement("li");
	var content = document.createTextNode("  " + txt);

	var del_btn = document.createElement("button");
	del_btn.appendChild(document.createTextNode("x"))


	element.appendChild(del_btn);
	element.appendChild(content);

	element.addEventListener("click", function() {
		element.classList.toggle("complete")
	})

	del_btn.addEventListener("click", function() {
		element.remove()
	})

	return element;
}

btn.addEventListener("click", function(){
	if (todoInput.value) {
		var n_element = createElementWithText(todoInput.value);
		lst.appendChild(n_element);

		todoInput.value = "";
	}
})

todoInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    btn.click();
  }
});
