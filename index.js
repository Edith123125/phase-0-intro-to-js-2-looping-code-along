function writeCards(namesArray, eventName) {
    //  empty array 
    let messages = [];
    for (let i = 0; i < namesArray.length; i++) {
       
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        
        // Add the message to the messages array
        messages.push(message);
    }

    
    return messages;
}

const names = ["Alice", "Bob", "Edith"];
const eventName = "birthday";
const thankYouCards = writeCards(names, eventName);

console.log(thankYouCards);



function countDown(y) {
    while (y >= 0) {
        console.log(y);
        y--; 
    }
}

countDown(10);



