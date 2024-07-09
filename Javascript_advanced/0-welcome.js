function welcome(firstName, lastname) {
    let fullName = firstName + " " + lastName;

    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }
    displayFullName();
}