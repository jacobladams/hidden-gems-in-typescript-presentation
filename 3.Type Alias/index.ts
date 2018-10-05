class Message {
    message: string;
    isYell: boolean;
}

 type MessageSource = string | string[] | (() => string) | Message;

 // type MessageAction = (string) => void;

// type Jake = string;

function showMessage(message: MessageSource) {
    if(Array.isArray(message)) {
        message.forEach(m=>{
            console.log(m);
        });
  
    } else if (typeof message === 'function') {
        console.log(message());
    } else if(message instanceof Message) {
        let messageLiteral = message.message;
        if(message.isYell) {
            messageLiteral = messageLiteral.toUpperCase();
        }
        console.log(messageLiteral);
    } else {
        console.log(message);
    }
}

function showMessageBackwards(message: MessageSource) {
    if(Array.isArray(message)) {
        message.forEach(m=>{
            console.log(reverse(m));
        });
  
    } else if (typeof message === 'function') {
        console.log(reverse(message()));
    } else if(message instanceof Message) {
        let messageLiteral = message.message;
        if(message.isYell) {
            messageLiteral = messageLiteral.toUpperCase();
        }
        console.log(reverse(messageLiteral));
    } else {
        console.log(reverse(message));
    }
}

function showMessageTwice(message: MessageSource) {
   showMessage(message);
   showMessage(message);
}

function reverse(str){
    return str.split("").reverse().join("");
}



const messageLiteral = 'hello world literal'
showMessageBackwards(messageLiteral);


const messageArray = ['hello', 'world', 'from', 'array'];
showMessageBackwards(messageArray);


const messagefunction = function(){
    return 'hello world function';
};
showMessageBackwards(messagefunction);

const messageObject = new Message();
messageObject.message = 'hello world object';
messageObject.isYell = true;
showMessageBackwards(messageObject);


showMessageTwice(messageLiteral);
showMessageTwice(messageArray);
showMessageTwice(messagefunction);
showMessageTwice(messageObject);