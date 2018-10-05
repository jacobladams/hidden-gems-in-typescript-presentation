class Message {
    message: string;
    isYell: boolean;
}

function showMessage(message: string | string[] | (() => string) | Message) {
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

function showMessageBackwards(message: string | string[] | (() => string) | Message) {
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

function reverse(str){
    return str.split("").reverse().join("");
  }

//ok
const messageLiteral = 'hello world literal'
showMessageBackwards(messageLiteral);

//ok
const messageArray = ['hello', 'world', 'from', 'array'];
showMessageBackwards(messageArray);

//ok
const messagefunction = function(){
    return 'hello world function';
};
showMessageBackwards(messagefunction);

//also ok now
const messageObject = new Message();
messageObject.message = 'hello world object';
messageObject.isYell = true;
showMessageBackwards(messageObject);