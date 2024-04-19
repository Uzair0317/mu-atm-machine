#!/usr/bin/env node

// Create A Pin 
// Create A Function In which User Choice Either Withdraw an Either Current Balancwe
// Fast CAsh Fuction also Created

import inquirer from "inquirer"

let CurrentBalance = 10000;

let PinCode = 112233;
let Pinanswer = await inquirer.prompt({
    name:"pin",
    message:"Enter Your Pincode = ",
type:"number"
});
if (Pinanswer.pin ===PinCode){
    let operation = await inquirer.prompt({
    name:"Operation",
    message:"Kindly Select An Operation : ",
    type:"list",
    choices:["Withdraw", "CheckBalance","Deposit"]
    });
    if (operation.Operation=== "Withdraw"){
const fastcash= await inquirer.prompt({
    name:"FastCash",
    message:"Please Select Your Cash ",
    type:"list",
    choices:["1000","1500","2000","3000","4000","Other"]
});
if (fastcash.FastCash==="1000"){
    (CurrentBalance -= fastcash.FastCash);
console.log(`Your Remaining Balance is : ${CurrentBalance}`);
}
else if(fastcash.FastCash==="1500"){
    CurrentBalance -= fastcash.FastCash;
console.log(`Your Remaining Balance is : ${CurrentBalance}`);
    } 
    else if(fastcash.FastCash==="2000"){
        CurrentBalance -= fastcash.FastCash;
    console.log(`Your Remaining Balance is : ${CurrentBalance}`);
        }
        else if (fastcash.FastCash==="3000"){
            CurrentBalance -= fastcash.FastCash;
        console.log(`Your Remaining Balance is : ${CurrentBalance}`);
            }
            else if (fastcash.FastCash==="4000"){
                CurrentBalance -= fastcash.FastCash;
            console.log(`Your Remaining Balance is : ${CurrentBalance}`);
                }
                else {
                    const amount = await inquirer.prompt({
                        name:"Amount",
                        message:"How Much Amount You Want To Withdraw",
                        type:"number"
                    });
                    if (amount.Amount<= 5000){
                        CurrentBalance -= amount.Amount;                        
                        {console.log(`Your Remaining Balance Is : ${CurrentBalance}`);}
                    }else {console.log("Your Transsection Is Too Much !!");};
                    
} }
else  if (operation.Operation==="CheckBalance")
{
    console.log(`Your Current Balance is : ${CurrentBalance}`);
}
else if (operation.Operation==="Deposit") {
    const fastdeposit= await inquirer.prompt({
    name:"FastDeposit",
    message:"Please Select Your Cash ",
    type:"list",
    choices:["1000","1500","2000","3000","4000","Other"]
});
if  (fastdeposit.FastDeposit==="1000"){
    let deposit1 = CurrentBalance + 1000;
    console.log(`Your Current Balance is : ${deposit1}`);
}
else if (fastdeposit.FastDeposit==="1500"){
    let deposit2 = CurrentBalance + 1500;
    console.log(`Your Current Balance is : ${deposit2}`);
}
else if (fastdeposit.FastDeposit==="2000"){
    let deposit3 = CurrentBalance + 2000;
    console.log(`Your Current Balance is : ${deposit3}`);
}
else if (fastdeposit.FastDeposit==="3000"){
    let deposit3 = CurrentBalance + 3000;
    console.log(`Your Current Balance is : ${deposit3}`);
}
else if (fastdeposit.FastDeposit==="4000"){
    let deposit4 = CurrentBalance + 4000;
    console.log(`Your Current Balance is : ${deposit4}`);
}
else {
    const depositcash = await inquirer.prompt ({
        name:"Cash",
        message:"How Much Amount You Want To Deposit",
        type:"number"
    }) 
    CurrentBalance += depositcash.Cash
    console.log(`Your Current Balance Now : ${CurrentBalance}`);
}

}
} else (console.log(`Your Pin Code Is Incorrect !!`))