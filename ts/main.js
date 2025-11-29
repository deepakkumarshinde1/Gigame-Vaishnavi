var text;
var mobile = 10;
text = "deepak";
console.log(text);
// Union Type
var isPresent = true;
var names = ["deepak", "kumar", "neha"];
var mobiles = [908900, 976567, 569876];
var product = ["Dell", 42000];
function add(a, b, c) {
    return a + b;
}
add(10, 20);
var student = {
    address: "",
    mobile: 1,
    name: "1",
};
var userId = 1234;
// Enums
// Admin, Trainer , Student
var Task;
(function (Task) {
    Task["Committed"] = "Done";
    Task["InProgress"] = "InProgress";
    Task["Assign"] = "Assign";
})(Task || (Task = {}));
console.clear();
var userTask = Task.Assign;
console.log(userTask);
