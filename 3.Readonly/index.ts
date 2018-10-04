class Message {
    message: string;
    isYell: boolean;
}

// class Message {
//     readonly message: string;
//     readonly isYell: boolean;

//     constructor(message: string, isYell: boolean) {
//         this.message = message;
//         this.isYell = isYell;
//     }
// }

function showMessage(message: Message) {
   
    let messageLiteral = message.message;
    if(message.isYell) {
        messageLiteral = messageLiteral.toUpperCase();
        message.isYell = false;
    }
    console.log(messageLiteral);
}


const isYell = true;
const messageObject = new Message();
messageObject.message = 'hello world object';
messageObject.isYell = isYell;
// const messageObject = new Message('hello world object', isYell);

showMessage(messageObject);
showMessage(messageObject);