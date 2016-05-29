var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, "
        + person.fullName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map