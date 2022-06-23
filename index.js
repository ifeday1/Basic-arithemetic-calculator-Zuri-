//calculation functions
const calculate =(first, second,func)=>{
    switch(func){
        case '+':
            return first + second;

        case '-':
            return first - second;

        case '*':
            return first * second;

        case '/':
            return first / second;

            case '%':
             return first % second;
             default:
                return 'Invalid operation';
    }
};

//get user input
const getinput =() => {
    let firstNumber = prompt('Please enter the first number:');
    let secondNumber = prompt('Please enter the second number:');
    let operator = prompt(
        'Please select an operataor, "+", "-" "*", "/", "%", '
    );
    const result = calculate(Number(firstNumber), Number(secondNumber), operator);

    alert(result);
};

//Add event to button
const button = document.querySelector('button');
button.addEventListener('click',e =>{
    getinput();
});

//call function
getinput();