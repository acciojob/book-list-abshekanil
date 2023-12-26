//your JS code here. If required.
let loginForm = document.querySelector(".form-group form");
let table = document.getElementById("book-list");

loginForm.addEventListener("submit" , (e) =>{
	e.preventDefault();

	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let isbn = document.getElementById("isbn").value;

	
	let newRow = table.insertRow(table.rows.length);

	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);
	let cell3 = newRow.insertCell(2);
	let cell4 = newRow.insertCell(3);

	cell1.innerHTML = title;
	cell2.innerHTML = author;
	cell3.innerHTML = isbn;

	let cancelButton = document.createElement("button");
	cancelButton.textContent = "X";
	cancelButton.classList.add("delete");

	cancelButton.addEventListener("click" , function(){
		table.deleteRow(newRow.rowIndex);
	});
	cell4.appendChild(cancelButton);
});

