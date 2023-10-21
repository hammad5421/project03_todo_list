import inquirer from "inquirer";
let todos = [];
let option = true;
while (option) {
    let answers = await inquirer.prompt([
        {
            type: "string",
            name: "Todo",
            message: "Enter a todo"
        }, {
            type: "confirm",
            name: "option1",
            message: "Do you want to add more.",
            default: false
        }
    ]);
    let { Todo, option1 } = answers;
    option = option1;
    if (Todo) {
        todos.push(Todo);
    }
    else {
        console.log("Enter a valid todo");
    }
}
if (todos.length > 0) {
    todos.forEach(element => {
        console.log(element);
    });
}
