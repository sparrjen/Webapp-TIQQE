async function getAllEmployees() {
    fetch( 'https://fv43n4zmge.execute-api.eu-north-1.amazonaws.com/Prod/employee',  {
        method: 'GET'
      })
    .then(response => response.json())
    .then((response) => {
        console.log(response.body);
        response.body.forEach(element => {
            document.getElementById("employeesFirstname").innerHTML += "<p>"+element.firstname+"</p>"; // Adds employee's firstname to the div
            document.getElementById("employeesLastname").innerHTML += "<p>"+element.lastname+"</p>"; // Adds employee's lasttname to the div
            document.getElementById("employeesEmail").innerHTML += "<p>"+element.email+"</p>"; // Adds employee's email to the div
            document.getElementById("employeesId").innerHTML += "<p>"+element.employeeId+"</p>"; // Adds employee's employeeId to the div
            
        });
    });
}
async function submitEmployee() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var employeeId = document.getElementById("employeeId").value;
    fetch( 'https://fv43n4zmge.execute-api.eu-north-1.amazonaws.com/Prod/employee',  {
        method: 'POST',
        body: JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "employeeId": employeeId
        })
    })
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        document.getElementById("employeesFirstname").innerHTML += "<p>"+element.firstname+"</p>";  // Adds employee's firstname to the div
        document.getElementById("employeesLastname").innerHTML += "<p>"+element.lastname+"</p>"; // Adds employee's lastname to the div
        document.getElementById("employeesEmail").innerHTML += "<p>"+element.email+"</p>"; // Adds employee's email to the div
        document.getElementById("employeesId").innerHTML += "<p>"+element.employeeId+"</p>"; // Adds employee's employeeId to the div
        $("#form")[0].reset();
    });
}

getAllEmployees(); // Calls the function on load


