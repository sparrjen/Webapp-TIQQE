async function getAllEmployees() {
    fetch( 'https://fv43n4zmge.execute-api.eu-north-1.amazonaws.com/Prod/employee',  {
        method: 'GET'
      })
    .then(response => response.json())
    .then((response) => {
        console.log(response.body);
        response.body.forEach(element => {
            document.getElementById("employees").innerHTML += "<p>"+element.email+"</p>"; // Adds employee's email to the div
            // document.getElementById("employees").innerHTML += "<p>"+element.firstname+ "</p>", "<p>"+element.lastname+"</p>" ; // Adds each employees lastname & firstname to div
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
        document.getElementById("employees").innerHTML += "<p>"+email+"</p>"; // Add new employee's email list
        // document.getElementById("messages").innerHTML += "<p>"+email+"</p>"; // Add firstname & lastname to list
        $("#form")[0].reset();
    });
}
getAllEmployees(); // Calls the function on load

$("#form")[0].reset();