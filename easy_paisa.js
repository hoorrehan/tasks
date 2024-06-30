//you have to make an easypaisa app task in which you have to perform following operation like transfer money receive money , bill payments , easy load bundle , cash back , saving etc.
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright("EASYPAISA"));
console.log(chalk.bgYellowBright("Pakistan's no 1 payment app"));
const myBalance = 15000;
//to make an account 
let answer = await inquirer.prompt([
    {
        name: "app",
        message: "to open the app you need to age of 18 years",
        type: "list",
        choices: ["valid CNIC number", "enter your MOBILE number"],
    },
    {
        name: "CNICnum",
        message: "please enter your CNIC number",
        type: "number"
    },
    {
        name: "MOBILEnum",
        message: "please enter your MOBILE number",
        type: "number"
    }
]
// verification of account
);
if (answer.CNICnum == "valid CNIC number") {
    console.log("verified");
}
else if (answer.MOBILEnum == "enter your MOBILE number") {
    console.log("verified");
}
let operation = await inquirer.prompt([
    {
        name: "action",
        message: "Which action you have been perform?",
        type: "list",
        choices: ["transfer money", "bill payment", "easyload", "mobile package", "my Balance"]
    }
]);
//for selection of transfer money option.
if (operation.action == "transfer money") {
    console.log(chalk.green("transfer your money"));
}
if (operation.action == "bill payment") {
    console.log(chalk.magenta("your bill is paid"));
}
if (operation.action == "easyload") {
    console.log("your bill is easy loaded");
}
if (operation.action == "mobile package") {
    console.log("your mobile package is done");
}
if (operation.action == "my Balance") {
    console.log("my Balance is enabled");
}
console.log("Thanks for using easypaisa application");
