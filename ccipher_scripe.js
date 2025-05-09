//sydney cripe
//cesear cipher part 1
const friend= "BRUTUS";
const shiftValue=3;
const alphabet="abcdefghijklmnopqrstuvwxyz"; //this will be a separate resource later on, but for now to get something to work
const efriend = "EUXWXV"; //efriend being the encrypted friend message 
//first letter of the name, this will change as the project goes on 
let first_value= friend[0].toLowerCase();
console.log("first letter: "+first_value); //console.logs are for debugging purposes, left them in will take them out eventually
let newFriend = findNewLetter(alphabet, shiftValue, first_value);
console.log(newFriend);
//question 6
console.log("first three letters: "+efriend.slice(0,3)); //0-2 only gave 2 letters while 0-3 gave 3...idk ://

//exersice 2.3- random shift 
let shiftVal = findRandomNumber(3,33);
console.log(shiftVal);

//---------------technical exersize 2.4--------------------- :)
let emblemClue1, emblemClue2, emblemClue3, loc;
loc="";
emblemClue1 = "Eagle";
emblemClue2 = "Grapes";
emblemClue3= 3;
//first clue
if(emblemClue1==="Eagle"){
    loc="Forum";
}else if(emblemClue1==="Lion"){
    loc="Colosseum";
}else{
    loc="Villa";
}
console.log(loc);

//second clue
if(emblemClue2 ==="Laurel"&& loc==="Forum"){
    loc+="Augustus";
}else if(emblemClue2==="Grapes"|| loc=="Villa"){
    loc+="Pompey";
}
console.log(loc);

//third clule
switch(emblemClue3){
    case 7: 
        loc+="North";
        break;
    case 3: 
        loc+="South";
        break;
    case 9: 
        loc+="East";
        break;
    case 4: 
        loc+="West";
        break;
}
console.log(loc);

//finds the position
function findNewLetter(alphabet, shiftVal, value){
    let newPosition= ((alphabet.indexOf(value)) + shiftValue);
    //solution to question 5
    if(newPosition>=alphabet.length){ //if the length of array + shift value is greater or equal than alphabet's length, then mod by 26 to go back to beginning of array
        console.log("alphabet length:" + alphabet.length); //.length gives string length
        newPosition= newPosition%alphabet.length; //question 4, alphabet.length
    }//i know that if statements haven't been introduced yet i think but i'm so used to using them i just used one 
    console.log("new array index:"+newPosition);
    let newLetter= alphabet.at(newPosition);
    return newLetter;
}

//technical exercise 2.3- random shift value- this assumes i is the lower number for now!!!!!
function findRandomNumber(i, j){
    let range = Math.abs(i-j); //always want a positive number
    range = range+1; //something to do with indices?
    let decimal= Math.random();
    console.log(decimal);
    let shiftVal = Math.floor(range*decimal)+i; //use floor to make sure value isn't greater than 33, and add 3 (or i in this case) to make sure value isn't less than 3
    return shiftVal;
}


/*Technical exersize 2.4 Question Answer
Triple equals checks what the value is, double equals only checks the type*/ 

