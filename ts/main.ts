let text: string;
let mobile: number = 10;
text = "deepak";
console.log(text);
// Union Type
let isPresent: boolean | string = true;

let names: string[] = ["deepak", "kumar", "neha"];
let mobiles: number[] = [908900, 976567, 569876];
let product: [string, number] = ["Dell", 42000];

function add(a: number, b: number, c?: number): number {
  return a + b;
}

add(10, 20);

type Student = {
  name: string;
  mobile: number;
  address: string;
};

let student: Student = {
  address: "",
  mobile: 1,
  name: "1",
};

type Id = string | number;
let userId: Id = 1234;

// Enums
// Admin, Trainer , Student
enum Task {
  Committed = "Done",
  InProgress = "InProgress",
  Assign = "Assign",
}
console.clear();
let userTask: Task = Task.Assign;
let user2Task: Task = Task.InProgress;
console.log(userTask);
