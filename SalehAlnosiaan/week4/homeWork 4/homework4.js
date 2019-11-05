// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

//If the number contains 3 as a factor, output 'Pling'.
//If the number contains 5 as a factor, output 'Plang'.
//If the number contains 7 as a factor, output 'Plong'.
//If the number does not contain 3, 5, or 7 as a factor, output the number as a string. 

function numbersAsAFactor(number)
{
 //let user = prompt('Please enter a number');
 
if (number % 3 == 0 && number % 5 == 0 && number % 7 == 0) { // All numbers as a factors
    console.log("PlingPlangPlong");
    document.write("PlingPlangPlong");
}
else if (number % 3 == 0 && number % 5 == 0) { // 3 and 5 as factors
    console.log("PlingPlang");
    document.write("PlingPlang");
}
else if (number % 5 && number % 7 == 0) {
    console.log("PlangPlong");
    document.write("PlangPlong");
}
else if (number % 3 == 0 && number % 7 == 0){
    console.log("PlingPlong")
}
else if (number % 3 == 0){
    console.log("Pling")
}
else if (number % 5 == 0){
    console.log("Plang")
}
else if (number % 7 == 0){
    console.log("Plong")
}
else{
    console.log("The number is a string")
}
}
numbersAsAFactor(33);
