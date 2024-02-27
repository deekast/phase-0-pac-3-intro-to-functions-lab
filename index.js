function shout(string) {
string = string.toUpperCase();
return string;
};

function whisper(string) {
    string = string.toLowerCase();
    return string ;
};

function logShout(string) {
    string = string.toUpperCase();
    console.log(string);
};

function logWhisper(string){
    string = string.toLowerCase();
    console.log(string);
};

function sayHiToHeadphonedRoommate(string) {
    if(string === string.toLowerCase()) {
        return "I can't hear you!";
    } if(string === string.toUpperCase()){
        return "YES INDEED!";
    } if(string === "Let's have dinner together!"){
        return "I would love to!";
     } 
}

