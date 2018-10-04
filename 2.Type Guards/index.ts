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
   // } else if (message instanceof Function) {
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

//ok
const messageLiteral = 'hello world literal'
showMessage(messageLiteral);

//ok
const messageArray = ['hello', 'world', 'from', 'array'];
showMessage(messageArray);

//ok
const messagefunction = function(){
    return 'hello world function';
};
showMessage(messagefunction);

//also ok now
const messageObject = new Message();
messageObject.message = 'hello world object';
messageObject.isYell = true;
showMessage(messageObject);