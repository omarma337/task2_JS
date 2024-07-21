function addData() {
    // Get form input values
    var name = document.getElementById("USER_NAME").value;
    var branch = document.getElementById("PASSWORD").value;
    var address = document.getElementById("Repeat Password").value;
    var contact = document.getElementById("Email").value;

    // Create a new row and append data
    var newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${name}</td><td>${branch}</td><td>${address}</td><td>${contact}</td>`;

    // Append the new row to the table
    document.getElementById("list").getElementsByTagName("tbody")[0].appendChild(newRow);
}
