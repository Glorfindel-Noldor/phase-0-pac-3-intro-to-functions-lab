// the part that screams
function shout(string){
    return string.toUpperCase();
}
// the part that whispers
function whisper(string){
    return string.toLowerCase();
}
// these two functions are so we can see whats happening through the terminal
function logShout(string){
    console.log(`${shout(string)}`);
}
function logWhisper(string){
    console.log(`${whisper(string)}`);
}
//-------------------------------------------------------



function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
   return "I can't hear you!";
    }
    if (string === string.toUpperCase()){
    return "YES INDEED!";
    }
    if (string = "let's have dinner together!"){
    return "I would love to!";
    }
}