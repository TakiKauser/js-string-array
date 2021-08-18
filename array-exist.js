function bestFriend(friends){
    // array existence checked
    if (Array.isArray(friends) == false){
        return "provide an array";
    }
    let besty = friends[0];
    for (const friend of friends){
        if (friend.length > besty.length){
            besty = friend;
        }
    }
    return besty;
}

const closeFriends = ["arefin", "nahid", "shadhin", "bappi", "khairul", "rafsan", "chamak", "didi", "mahfuz", "ovi", "saeid"];

const requredBestFriend = bestFriend(50);
// console.log(requredBestFriend);


// indexOf
if (closeFriends.indexOf("badhon") != -1){
    // console.log("Badhon is one of your friend!");
}
else{
    // console.log("Badhon isn't your friend.");
}

// includes
if (closeFriends.includes("ovi")){
    // console.log("Ovi is your friend!");
}

// concate
const first = [0, 1];
const second = [1, 2, 3, 5, 8, 13, 21];

const combined = first.concat(second);
console.log(combined);