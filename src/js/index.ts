let btnToOunces: HTMLButtonElement = <HTMLButtonElement>document.getElementById("conv-2-ounces-btn");
btnToOunces.addEventListener("click", ConvToOuncesBtn);

let btnToGrams: HTMLButtonElement = <HTMLButtonElement>document.getElementById("conv-2-grams-btn");
btnToGrams.addEventListener("click", ConvToGramsBtn);

function ConvToOuncesBtn(){
    let weightInput: HTMLInputElement = <HTMLInputElement>document.getElementById("input-value");
    let weightNumber = convertInput(weightInput);
    let result = weightNumber * 0.035274;
    displayResult(result); 
}

function ConvToGramsBtn(){
    let weightInput: HTMLInputElement = <HTMLInputElement>document.getElementById("input-value");
    let weightNumber = convertInput(weightInput);
    let result = weightNumber * 28.35;
    displayResult(result); 
}

function convertInput(weightInput:HTMLInputElement){
    let inputValue: string = weightInput.value;  
    let weightNumber: number = +inputValue;
    return weightNumber;
}


function displayResult(result:number){
    let stringResult: string = String(result); 

    let displayElement: HTMLSpanElement = <HTMLSpanElement> document.getElementById("result");
    displayElement.innerHTML = stringResult;
}

